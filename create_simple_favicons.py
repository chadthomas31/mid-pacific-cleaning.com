#!/usr/bin/env python3
"""
Create simple favicon files with correct dimensions
"""
import os

def create_simple_favicon(size, filename):
    """Create a simple colored square favicon"""
    try:
        # Try to use PIL if available
        from PIL import Image, ImageDraw
        
        # Create a simple colored square
        img = Image.new('RGBA', (size, size), (0, 0, 0, 0))  # Transparent background
        draw = ImageDraw.Draw(img)
        
        # Draw a simple circle (representing the hibiscus)
        margin = size // 8
        draw.ellipse([margin, margin, size-margin, size-margin], 
                    fill=(255, 100, 100, 255))  # Coral color
        
        # Save the image
        img.save(filename, 'PNG')
        print(f"✅ Created {filename} ({size}x{size})")
        return True
        
    except ImportError:
        print("PIL not available, creating placeholder files...")
        # Create empty placeholder files
        with open(filename, 'w') as f:
            f.write("")
        print(f"⚠️  Created placeholder {filename} - you need to resize manually")
        return False
    except Exception as e:
        print(f"❌ Error creating {filename}: {e}")
        return False

def main():
    public_dir = "/home/chad/projects/mid-pacific-cleaning.com/public"
    
    # Create favicon files
    favicons = [
        (16, "favicon-16x16.png"),
        (32, "favicon-32x32.png"),
    ]
    
    for size, filename in favicons:
        output_path = os.path.join(public_dir, filename)
        create_simple_favicon(size, output_path)

if __name__ == "__main__":
    main()
