# 3D Model Integration Research

## Libraries
- **Three.js**: Most popular JavaScript 3D library for web
- **GSAP ScrollTrigger**: Animation library for scroll-based animations
- Model format: GLB/GLTF (recommended for web)

## Approach
1. Use Three.js to load and render 3D model
2. Implement scroll event listener to rotate model based on scroll position
3. Use GLB/GLTF format models (optimized for web)

## 3D Model Sources
- Sketchfab: Free t-shirt and jogger models available
- T-shirt model: https://sketchfab.com/3d-models/t-shirt-c1a3e5eb9b5445f4b7d4be82f1127eba
- Jogger model: https://sketchfab.com/3d-models/modern-pants-joggers-8f5d9d46bd514bcdbe3796225b838a52

## Implementation Plan
1. Add Three.js via CDN
2. Create canvas element for 3D rendering
3. Load GLB model
4. Set up scene, camera, lighting
5. Add scroll event listener to rotate model
6. Style to match existing design


## Selected Model
- T-Shirt model from Sketchfab by funlab117
- License: CC Attribution (free to use with attribution)
- Format: GLB/GLTF available
- Stats: 237.9k triangles, 121k vertices
- URL: https://sketchfab.com/3d-models/t-shirt-c1a3e5eb9b5445f4b7d4be82f1127eba

## Decision
Will use Three.js with a simple GLB model loader. Since the user wants a clean, stylish implementation, I'll:
1. Create a dedicated section for the 3D model
2. Use Three.js CDN (no build process needed)
3. Implement smooth scroll-based rotation
4. Match the existing dark theme and aesthetic
5. Use a simple placeholder model approach (will provide instructions for user to download their preferred model)
