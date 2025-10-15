#!/usr/bin/env python3
"""
Fix favicon dimensions using PIL
"""
import os
import sys

def resize_image(input_path, output_path, size):
    """Resize image to specified size"""
    try:
        from PIL import Image
        
        with Image.open(input_path) as img:
            # Convert to RGBA if not already
            if img.mode != 'RGBA':
                img = img.convert('RGBA')
            
            # Resize to the specified size
            resized = img.resize((size, size), Image.Resampling.LANCZOS)
            
            # Save the resized image
            resized.save(output_path, 'PNG', optimize=True)
            print(f"Created {output_path} ({size}x{size})")
            return True
    except ImportError:
        print("PIL not available, trying alternative method...")
        return False
    except Exception as e:
        print(f"Error creating {output_path}: {e}")
        return False

def main():
    logo_path = "/home/chad/projects/mid-pacific-cleaning.com/public/logo.png"
    public_dir = "/home/chad/projects/mid-pacific-cleaning.com/public"
    
    # Create favicon files
    favicons = [
        (16, "favicon-16x16.png"),
        (32, "favicon-32x32.png"),
    ]
    
    for size, filename in favicons:
        output_path = os.path.join(public_dir, filename)
        if resize_image(logo_path, output_path, size):
            print(f"✅ Created {filename} ({size}x{size})")
        else:
            print(f"❌ Failed to create {filename}")

if __name__ == "__main__":
    main()
