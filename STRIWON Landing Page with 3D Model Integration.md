# STRIWON Landing Page with 3D Model Integration

## Overview

This updated landing page includes a **3D model section** that rotates as users scroll, creating an immersive and interactive experience. The implementation uses **Three.js** for 3D rendering and maintains the clean, dark aesthetic of the original design.

## Features

- ✨ **Scroll-based 3D rotation**: The model rotates smoothly as you scroll through the section
- 🎨 **Stylish dark theme**: Matches the existing STRIWON brand aesthetic
- 📱 **Fully responsive**: Works beautifully on desktop, tablet, and mobile devices
- ⚡ **Lightweight**: Uses CDN for Three.js, no build process required
- 🔄 **Subtle idle animation**: Model continues to rotate slowly when not scrolling

## Current Implementation

The code currently uses a **placeholder box geometry** to demonstrate the 3D functionality. This allows you to test the scroll interaction immediately without needing a 3D model file.

## How to Add Your Own 3D Model

### Step 1: Get a 3D Model

Download a free GLB/GLTF model from:

- **Sketchfab**: https://sketchfab.com/3d-models/t-shirt-c1a3e5eb9b5445f4b7d4be82f1127eba
- **CGTrader**: https://www.cgtrader.com/3d-models/tshirt
- **TurboSquid**: https://www.turbosquid.com/Search/3D-Models/free/t-shirt

### Step 2: Place the Model File

1. Create a `models` folder in your project directory
2. Place your downloaded `.glb` or `.gltf` file in this folder
3. Example: `models/tshirt.glb`

### Step 3: Update the Code

In `index.html`, find the 3D model setup section (around line 220) and **uncomment** the GLTF loader code:

```javascript
// Remove or comment out the placeholder box:
/*
const geometry = new THREE.BoxGeometry(2, 2.5, 0.3);
const material = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.8
});
model = new THREE.Mesh(geometry, material);
scene.add(model);
*/

// Uncomment this section:
const loader = new THREE.GLTFLoader();
loader.load(
  "models/tshirt.glb", // Path to your 3D model
  function (gltf) {
    model = gltf.scene;
    model.scale.set(2, 2, 2); // Adjust scale as needed
    scene.add(model);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error("Error loading model:", error);
  }
);
```

### Step 4: Adjust Settings (Optional)

You can customize the model appearance by adjusting:

- **Scale**: `model.scale.set(2, 2, 2)` - Make the model larger or smaller
- **Position**: `model.position.set(0, 0, 0)` - Move the model
- **Rotation speed**: Change `scrollProgress * Math.PI * 2` for faster/slower rotation
- **Camera distance**: Adjust `camera.position.z = 5` to zoom in/out

## File Structure

```
your-project/
├── index.html          # Main HTML file with 3D integration
├── styles.css          # Updated CSS with 3D section styling
├── images/             # Your existing images
│   ├── logo_new.png
│   └── favicons/
└── models/             # Create this folder for 3D models
    └── tshirt.glb      # Your 3D model file
```

## Browser Compatibility

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers

## Performance Tips

- Use **GLB format** (compressed) instead of GLTF for faster loading
- Keep model polygon count under 100k triangles for smooth performance
- Optimize textures to 2048x2048 or smaller

## Customization Ideas

1. **Multiple models**: Add a carousel to switch between t-shirt, jogger, and other products
2. **Color picker**: Allow users to change the model color in real-time
3. **Hotspots**: Add clickable areas on the model to highlight features
4. **Auto-rotate**: Enable continuous rotation without scrolling

## Credits

- **3D Library**: Three.js (https://threejs.org/)
- **Fonts**: Google Fonts (Outfit, Space Grotesk)
- **Design**: STRIWON Team

## License

The t-shirt model from Sketchfab uses **CC Attribution** license. Remember to credit the original creator if you use their model.

## Need Help?

If you encounter any issues:

1. Check the browser console for error messages
2. Verify the model file path is correct
3. Ensure the model is in GLB or GLTF format
4. Try reducing the model scale if it's not visible

Enjoy your new 3D interactive landing page! 🚀
