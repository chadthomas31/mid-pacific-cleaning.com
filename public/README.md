# Logo and Favicon Setup Instructions

This folder contains the static assets for your Mid Pacific Cleaning website.

## Required Files

Place the following files in the `public` folder:

### Logo Files
- `logo.png` (512x512 pixels) - Main logo for the website
- `logo-wide.png` (800x200 pixels) - Optional horizontal logo variant

### Favicon Files
- `favicon.ico` (32x32 pixels) - Traditional favicon for older browsers
- `favicon-16x16.png` (16x16 pixels)
- `favicon-32x32.png` (32x32 pixels)
- `favicon-48x48.png` (48x48 pixels)

### Mobile App Icons
- `apple-touch-icon.png` (180x180 pixels) - For iOS devices
- `android-chrome-192x192.png` (192x192 pixels) - For Android devices
- `android-chrome-512x512.png` (512x512 pixels) - For high-resolution displays

## File Organization

```
public/
├── logo.png                    # Main logo (512x512)
├── logo-wide.png              # Optional wide logo (800x200)
├── favicon.ico                 # Traditional favicon
├── favicon-16x16.png          # Small favicon
├── favicon-32x32.png          # Standard favicon
├── favicon-48x48.png          # Large favicon
├── apple-touch-icon.png       # iOS icon (180x180)
├── android-chrome-192x192.png # Android icon (192x192)
├── android-chrome-512x512.png # High-res icon (512x512)
├── site.webmanifest           # Web app manifest (already created)
└── icons/                     # Additional icon files (optional)
└── images/                    # Other images (optional)
```

## How to Use Your Logo in Components

### In React Components:
```jsx
// Basic logo usage
<img src="/logo.png" alt="Mid Pacific Cleaning Logo" className="h-12 w-12" />

// Responsive logo
<img 
  src="/logo.png" 
  alt="Mid Pacific Cleaning Logo" 
  className="h-8 w-8 md:h-12 md:w-12" 
/>

// Wide logo for headers
<img 
  src="/logo-wide.png" 
  alt="Mid Pacific Cleaning" 
  className="h-16 w-auto" 
/>
```

### In CSS:
```css
.logo {
  background-image: url('/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
```

## GIMP Creation Instructions

### For Logo (512x512):
1. Open GIMP
2. File → New
3. Set width: 512px, height: 512px
4. Resolution: 72 pixels/inch
5. Color space: RGB
6. Fill with: Transparency
7. Design your logo
8. Export as PNG with transparency

### For Favicon (32x32):
1. Open GIMP
2. File → New
3. Set width: 32px, height: 32px
4. Resolution: 72 pixels/inch
5. Color space: RGB
6. Fill with: Transparency
7. Create simple, clear design (will be very small)
8. Export as PNG

### For Apple Touch Icon (180x180):
1. Open GIMP
2. File → New
3. Set width: 180px, height: 180px
4. Resolution: 72 pixels/inch
5. Color space: RGB
6. Fill with: White or transparent
7. Design your icon
8. Export as PNG

## Testing Your Icons

After adding your files:

1. **Browser Testing**: Open your website and check the browser tab for the favicon
2. **Mobile Testing**: Add to home screen on mobile devices to test app icons
3. **Social Media**: Test sharing on social media to see how the logo appears
4. **Console Check**: Open browser dev tools and check for 404 errors on missing files

## Troubleshooting

- **Favicon not showing**: Clear browser cache and hard refresh (Ctrl+F5)
- **Icons not updating**: Check file names match exactly (case-sensitive)
- **Mobile icons not working**: Ensure manifest.json is properly linked
- **Logo too blurry**: Use higher resolution source images

## Next Steps

1. Create your logo and favicon files using GIMP
2. Save them with the exact filenames listed above
3. Place them in the `public` folder
4. Test your website to ensure everything displays correctly
5. Consider creating additional sizes if needed for specific use cases
