#!/bin/bash

# Logo Resizing Script for Mid Pacific Cleaning
# This script will help you resize your logo files to the correct dimensions

echo "=== Mid Pacific Cleaning Logo Resizing ==="
echo "Current files in icons folder:"
ls -la /home/chad/projects/mid-pacific-cleaning.com/public/icons/

echo ""
echo "=== REQUIRED ACTIONS ==="
echo "All your images are currently 1024x1024 pixels."
echo "You need to resize them to the correct dimensions using GIMP:"
echo ""

echo "1. MAIN LOGO (512x512):"
echo "   - Open: kate_Darci_logo_512X512.png"
echo "   - Resize to: 512x512 pixels"
echo "   - Save as: logo.png (in public folder)"
echo ""

echo "2. FAVICON FILES:"
echo "   - kate_Darci_logo_16X16.png → favicon-16x16.png (16x16 pixels)"
echo "   - kate_Darci_logo_32X32.png → favicon-32x32.png (32x32 pixels)"  
echo "   - kate_Darci_logo_48X48 → favicon-48x48.png (48x48 pixels)"
echo ""

echo "3. MOBILE ICONS:"
echo "   - kate_Darci_logo_180x180.png → apple-touch-icon.png (180x180 pixels)"
echo "   - kate_Darci_logo_192x192.png → android-chrome-192x192.png (192x192 pixels)"
echo "   - kate_Darci_logo_512X512.png → android-chrome-512x512.png (512x512 pixels)"
echo ""

echo "=== GIMP INSTRUCTIONS ==="
echo "For each file:"
echo "1. Open the image in GIMP"
echo "2. Image → Scale Image"
echo "3. Set the correct dimensions"
echo "4. Interpolation: Cubic"
echo "5. Click Scale"
echo "6. File → Export As"
echo "7. Choose the new filename"
echo "8. Export as PNG"
echo ""

echo "=== FINAL FILE STRUCTURE ==="
echo "public/"
echo "├── logo.png (512x512)"
echo "├── favicon-16x16.png (16x16)"
echo "├── favicon-32x32.png (32x32)"
echo "├── favicon-48x48.png (48x48)"
echo "├── apple-touch-icon.png (180x180)"
echo "├── android-chrome-192x192.png (192x192)"
echo "└── android-chrome-512x512.png (512x512)"
echo ""

echo "After resizing, move all files to the public/ folder (not icons/)"
