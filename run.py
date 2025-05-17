import os
import sys
import webbrowser
import threading
import time
from app import app, init_db

def open_browser():
    """Open the browser after a delay"""
    time.sleep(1.5)
    webbrowser.open("http://localhost:5000")

def main():
    print("Initializing HomeVista database...")
    init_db()
    print("Database initialized successfully!")
    
    print("\nStarting HomeVista backend server...")
    print("The website will open in your default browser.")
    
    # Start a thread to open the browser
    threading.Thread(target=open_browser).start()
    
    # Start the Flask app
    app.run(debug=True, port=5000)

if __name__ == "__main__":
    main()