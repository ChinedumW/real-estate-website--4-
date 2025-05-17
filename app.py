from flask import Flask, render_template, redirect, url_for, request, jsonify, send_from_directory
import sqlite3
import os
from werkzeug.security import generate_password_hash
from werkzeug.utils import secure_filename
import json
import datetime

# Initialize Flask app
app = Flask(__name__, static_folder='public', static_url_path='/public')
app.config['UPLOAD_FOLDER'] = 'public/uploads/'
app.secret_key = 'homevista_secret_key'

# Create uploads folder if it doesn't exist
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Database setup
def get_db_connection():
    conn = sqlite3.connect('homevista.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    """Initialize the database with tables and sample data"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Create tables
    cursor.executescript('''
    -- Users table
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        phone TEXT,
        role TEXT CHECK(role IN ('buyer', 'agent', 'admin')) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        image_url TEXT
    );
    
    -- Properties table
    CREATE TABLE IF NOT EXISTS properties (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        price REAL NOT NULL,
        status TEXT CHECK(status IN ('Active', 'Pending', 'Sold', 'For Sale', 'For Rent')) NOT NULL,
        type TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        state TEXT NOT NULL,
        zip TEXT NOT NULL,
        beds INTEGER NOT NULL,
        baths REAL NOT NULL,
        sqft INTEGER NOT NULL,
        lot_size TEXT,
        year_built INTEGER,
        agent_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        views INTEGER DEFAULT 0,
        FOREIGN KEY (agent_id) REFERENCES users(id)
    );
    
    -- Property images table
    CREATE TABLE IF NOT EXISTS property_images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        property_id INTEGER NOT NULL,
        image_url TEXT NOT NULL,
        is_primary BOOLEAN DEFAULT 0,
        FOREIGN KEY (property_id) REFERENCES properties(id)
    );
    
    -- Property amenities table
    CREATE TABLE IF NOT EXISTS property_amenities (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        property_id INTEGER NOT NULL,
        amenity TEXT NOT NULL,
        FOREIGN KEY (property_id) REFERENCES properties(id)
    );

    -- Property inquiries table
    CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        property_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        message TEXT NOT NULL,
        status TEXT CHECK(status IN ('New', 'Responded', 'Closed')) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (property_id) REFERENCES properties(id)
    );
    ''')
    
    # Check if users table has data, if not insert sample data
    cursor.execute("SELECT COUNT(*) FROM users")
    if cursor.fetchone()[0] == 0:
        # Insert sample users
        users = [
            ('Jennifer Smith', 'jennifer@homevista.com', generate_password_hash('password123'), '(555) 123-4567', 'agent', '/images/agent1.jpg'),
            ('Michael Chen', 'michael@homevista.com', generate_password_hash('password123'), '(555) 987-6543', 'agent', '/images/agent2.jpg'),
            ('Emily Rodriguez', 'emily@homevista.com', generate_password_hash('password123'), '(555) 555-1234', 'agent', '/images/agent3.jpg'),
            ('John Doe', 'john@example.com', generate_password_hash('password123'), '(555) 111-2222', 'buyer', None),
            ('Sarah Johnson', 'sarah@example.com', generate_password_hash('password123'), '(555) 333-4444', 'buyer', None),
            ('Admin User', 'admin@homevista.com', generate_password_hash('admin123'), '(555) 999-9999', 'admin', None)
        ]
        cursor.executemany('''
            INSERT INTO users (name, email, password, phone, role, image_url) VALUES (?, ?, ?, ?, ?, ?)
        ''', users)

        # Insert sample properties
        properties = [
            ('Modern Apartment with City View', 'Sleek, contemporary apartment in the heart of downtown with stunning city views, updated kitchen, and spa-like bathroom.', 340000, 'Active', 'apartment', '123 Downtown St', 'New York', 'NY', '10001', 2, 2, 1200, None, 2015, 1),
            ('Luxury Family Home with Pool', 'Spacious family home in an exclusive neighborhood with a pool, gourmet kitchen, and large backyard perfect for entertaining.', 875000, 'Active', 'house', '456 Suburban Dr', 'Los Angeles', 'CA', '90210', 4, 3, 2800, '0.4 acres', 2010, 1),
            ('Cozy Studio in Historic District', 'Charming studio apartment in the historic district, walking distance to restaurants, shops, and public transportation.', 220000, 'Pending', 'studio', '789 Heritage Ave', 'Boston', 'MA', '02108', 1, 1, 650, None, 1920, 2),
            ('Waterfront Condo with Marina Access', 'Elegant waterfront condo with private marina access, updated finishes, and panoramic water views from the balcony.', 495000, 'Active', 'condo', '101 Harbor View', 'Miami', 'FL', '33101', 2, 2, 1400, None, 2018, 2),
            ('Mountain View Cabin Retreat', 'Rustic cabin with modern amenities and breathtaking mountain views, perfect for a vacation home or year-round living.', 385000, 'Sold', 'cabin', '222 Alpine Rd', 'Denver', 'CO', '80201', 3, 2, 1750, '1.2 acres', 2005, 3),
            ('Urban Loft in Arts District', 'Industrial-style loft in the vibrant arts district featuring high ceilings, exposed brick, and floor-to-ceiling windows.', 420000, 'For Sale', 'loft', '333 Creative Blvd', 'Portland', 'OR', '97201', 1, 2, 1500, None, 2012, 3)
        ]
        cursor.executemany('''
            INSERT INTO properties (title, description, price, status, type, address, city, state, zip, beds, baths, sqft, lot_size, year_built, agent_id)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', properties)

        # Insert property images
        property_images = [
            (1, '/images/property1.jpg', 1),
            (1, '/images/property2.jpg', 0),
            (2, '/images/property2.jpg', 1),
            (2, '/images/property3.jpg', 0),
            (3, '/images/property3.jpg', 1),
            (3, '/images/property4.jpg', 0),
            (4, '/images/property4.jpg', 1),
            (4, '/images/property5.jpg', 0),
            (5, '/images/property5.jpg', 1),
            (5, '/images/property6.jpg', 0),
            (6, '/images/property6.jpg', 1),
            (6, '/images/property1.jpg', 0)
        ]
        cursor.executemany('''
            INSERT INTO property_images (property_id, image_url, is_primary)
            VALUES (?, ?, ?)
        ''', property_images)

        # Insert property amenities
        amenities = [
            'Central Air Conditioning', 'Attached Garage', 'High-Speed Internet',
            'Smart Home System', 'Gourmet Kitchen', 'Hardwood Floors',
            'Walk-in Closets', 'Energy Efficient Appliances', 'Fireplace', 'Patio/Deck'
        ]
        
        property_amenities = []
        for property_id in range(1, 7):
            # Assign 5-8 random amenities to each property
            import random
            selected_amenities = random.sample(amenities, random.randint(5, 8))
            for amenity in selected_amenities:
                property_amenities.append((property_id, amenity))
                
        cursor.executemany('''
            INSERT INTO property_amenities (property_id, amenity)
            VALUES (?, ?)
        ''', property_amenities)

        # Insert inquiries
        inquiries = [
            (1, 'John Doe', 'john.doe@example.com', '(555) 123-4567', 'I would like to schedule a viewing of this property.', 'New', '2025-05-15 10:30:00'),
            (2, 'Sarah Johnson', 'sarah.j@example.com', '(555) 987-6543', 'Is this property still available? I am interested in making an offer.', 'Responded', '2025-05-14 15:45:00'),
            (3, 'Michael Chen', 'm.chen@example.com', '(555) 555-1234', 'Can you provide more information about the neighborhood and schools?', 'New', '2025-05-12 09:15:00'),
        ]
        cursor.executemany('''
            INSERT INTO inquiries (property_id, name, email, phone, message, status, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ''', inquiries)

    conn.commit()
    conn.close()

# Initialize the database
init_db()

# API Routes
@app.route('/api/properties', methods=['GET'])
def get_properties():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Get query parameters
    status = request.args.get('status')
    type = request.args.get('type')
    min_price = request.args.get('min_price')
    max_price = request.args.get('max_price')
    beds = request.args.get('beds')
    baths = request.args.get('baths')
    
    # Build the query
    query = '''
        SELECT p.*, u.name as agent_name, u.email as agent_email, u.phone as agent_phone, u.image_url as agent_image,
            (SELECT image_url FROM property_images WHERE property_id = p.id AND is_primary = 1) as primary_image
        FROM properties p
        JOIN users u ON p.agent_id = u.id
        WHERE 1=1
    '''
    params = []
    
    if status:
        query += ' AND p.status = ?'
        params.append(status)
    if type:
        query += ' AND p.type = ?'
        params.append(type)
    if min_price:
        query += ' AND p.price >= ?'
        params.append(float(min_price))
    if max_price:
        query += ' AND p.price <= ?'
        params.append(float(max_price))
    if beds:
        query += ' AND p.beds >= ?'
        params.append(int(beds))
    if baths:
        query += ' AND p.baths >= ?'
        params.append(float(baths))
    
    cursor.execute(query, params)
    properties = cursor.fetchall()
    
    # Format the output
    result = []
    for property in properties:
        # Get amenities for the property
        cursor.execute('SELECT amenity FROM property_amenities WHERE property_id = ?', (property['id'],))
        amenities = [row['amenity'] for row in cursor.fetchall()]
        
        # Get all images for the property
        cursor.execute('SELECT image_url, is_primary FROM property_images WHERE property_id = ?', (property['id'],))
        images = [{'url': row['image_url'], 'is_primary': row['is_primary']} for row in cursor.fetchall()]
        
        property_dict = dict(property)
        property_dict['amenities'] = amenities
        property_dict['images'] = images
        result.append(property_dict)
    
    conn.close()
    return jsonify(result)

@app.route('/api/properties/<int:id>', methods=['GET'])
def get_property(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    # Get the property with agent information
    cursor.execute('''
        SELECT p.*, u.name as agent_name, u.email as agent_email, u.phone as agent_phone, u.image_url as agent_image
        FROM properties p
        JOIN users u ON p.agent_id = u.id
        WHERE p.id = ?
    ''', (id,))
    property = cursor.fetchone()
    
    if property:
        # Get amenities for the property
        cursor.execute('SELECT amenity FROM property_amenities WHERE property_id = ?', (id,))
        amenities = [row['amenity'] for row in cursor.fetchall()]
        
        # Get all images for the property
        cursor.execute('SELECT image_url, is_primary FROM property_images WHERE property_id = ?', (id,))
        images = [{'url': row['image_url'], 'is_primary': row['is_primary']} for row in cursor.fetchall()]
        
        # Update view count
        cursor.execute('UPDATE properties SET views = views + 1 WHERE id = ?', (id,))
        conn.commit()
        
        property_dict = dict(property)
        property_dict['amenities'] = amenities
        property_dict['images'] = images
        
        conn.close()
        return jsonify(property_dict)
    
    conn.close()
    return jsonify({'error': 'Property not found'}), 404

@app.route('/api/inquiries', methods=['POST'])
def create_inquiry():
    data = request.json
    
    if not data or not all(key in data for key in ['property_id', 'name', 'email', 'message']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO inquiries (property_id, name, email, phone, message)
        VALUES (?, ?, ?, ?, ?)
    ''', (data['property_id'], data['name'], data['email'], data.get('phone', ''), data['message']))
    
    conn.commit()
    inquiry_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'id': inquiry_id, 'message': 'Inquiry submitted successfully'})

@app.route('/api/users/<int:id>/properties', methods=['GET'])
def get_agent_properties(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT p.*, 
               (SELECT image_url FROM property_images WHERE property_id = p.id AND is_primary = 1) as primary_image
        FROM properties p
        WHERE p.agent_id = ?
    ''', (id,))
    
    properties = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify(properties)

@app.route('/api/users/<int:id>/inquiries', methods=['GET'])
def get_agent_inquiries(id):
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute('''
        SELECT i.*, p.title as property_title
        FROM inquiries i
        JOIN properties p ON i.property_id = p.id
        WHERE p.agent_id = ?
        ORDER BY i.created_at DESC
    ''', (id,))
    
    inquiries = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify(inquiries)

# Serve Next.js app
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # This would serve your Next.js app in production
    # For development, you'd use the Next.js dev server separately
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
    print("HomeVista backend is running on http://localhost:5000")