#!/usr/bin/env python3
"""
Create favicon files from the main logo
"""
from PIL import Image
import os

def create_favicon(source_path, output_path, size):
    """Create a favicon of the specified size"""
    try:
        # Open the source image
        with Image.open(source_path) as img:
            # Convert to RGBA if not already
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            
            # Resize to the specified size
            resized = img.resize((size, size), Image.Resampling.LANCZOS)
            
            # Save the resized image
            resized.save(output_path, 'PNG', optimize=True)
            print(f"Created {output_path} ({size}x{size})")
            return True
    except Exception as e:
        print(f"Error creating {output_path}: {e}")
        return False

def main():
    # Paths
    logo_path = "/home/chad/projects/mid-pacific-cleaning.com/public/logo.png"
    public_dir = "/home/chad/projects/mid-pacific-cleaning.com/public"
    
    # Create favicon files
    favicons = [
        (16, "favicon-16x16.png"),
        (32, "favicon-32x32.png"),
    ]
    
    for size, filename in favicons:
        output_path = os.path.join(public_dir, filename)
        create_favicon(logo_path, output_path, size)
    
    print("Favicon creation complete!")

if __name__ == "__main__":
    main()
