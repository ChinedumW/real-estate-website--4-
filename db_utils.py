import sqlite3
import os
from prettytable import PrettyTable

def connect_db():
    """Connect to the database"""
    conn = sqlite3.connect('homevista.db')
    conn.row_factory = sqlite3.Row
    return conn

def show_tables():
    """Show all tables in the database"""
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cursor.fetchall()
    
    print("\n=== Database Tables ===")
    for table in tables:
        print(f"- {table['name']}")
    
    conn.close()

def show_schema(table_name):
    """Show the schema for a specific table"""
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute(f"PRAGMA table_info({table_name})")
    columns = cursor.fetchall()
    
    table = PrettyTable()
    table.field_names = ["ID", "Name", "Type", "NotNull", "Default", "PK"]
    
    for col in columns:
        table.add_row([col['cid'], col['name'], col['type'], col['notnull'], col['dflt_value'], col['pk']])
    
    print(f"\n=== Schema for {table_name} ===")
    print(table)
    
    conn.close()

def show_table_data(table_name, limit=5):
    """Show sample data from a table"""
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute(f"SELECT * FROM {table_name} LIMIT {limit}")
    rows = cursor.fetchall()
    
    if not rows:
        print(f"\n=== No data in {table_name} ===")
        conn.close()
        return
    
    table = PrettyTable()
    table.field_names = list(rows[0].keys())
    
    for row in rows:
        table.add_row(list(row))
    
    print(f"\n=== Sample data from {table_name} ({limit} rows) ===")
    print(table)
    
    conn.close()

def count_table_rows():
    """Count rows in each table"""
    conn = connect_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table'")
    tables = cursor.fetchall()
    
    print("\n=== Row counts ===")
    for table in tables:
        table_name = table['name']
        cursor.execute(f"SELECT COUNT(*) as count FROM {table_name}")
        count = cursor.fetchone()['count']
        print(f"- {table_name}: {count} rows")
    
    conn.close()

def main():
    """Run all database utilities"""
    # Make sure the database exists by importing the app
    from app import init_db
    init_db()
    
    show_tables()
    count_table_rows()
    
    # Show schema for each table
    tables = ['users', 'properties', 'property_images', 'property_amenities', 'inquiries']
    for table in tables:
        show_schema(table)
    
    # Show sample data
    for table in tables:
        show_table_data(table)

if __name__ == "__main__":
    main()