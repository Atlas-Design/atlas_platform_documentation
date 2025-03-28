---
id: export_integration
title: Export and Integration
sidebar: false
---
![header](..\static\img\headers\03.jpg)
## 🚀 Export and Integration

Once you're happy with the generated assets in **Atlas Platform**, you can easily export them for use in your game engine or DCC tools.

### 📦 Export Formats

Currently, **Atlas Platform** supports the following export options:

- **`.blend` files**  
  Native Blender files that you can open and edit directly in the Blender DCC.

- **`.glb` files**  
  A universal format compatible with many game engines and 3D applications such as **Unreal Engine**.

---

### 🎮 Using `.glb` Files in Unreal Engine

When importing `.glb` assets into **Unreal Engine**, it's important to pay special attention to **normal maps**. Unreal Engine uses **DirectX normal maps by default**, but it also **automatically flips the green (Y) channel** during import.

Here’s how to handle it correctly:

- If the normal map is named or marked as **DirectX**,  
  👉 **Uncheck** the **"Flip Green Channel"** option in the texture settings after import.  
  This prevents double-flipping and ensures the normals render properly.

- If the normal map is in **OpenGL** format,  
  ✅ You can leave Unreal’s default **"Flip Green Channel"** setting **enabled**.  
  The engine will flip it once, as expected.

> 🔧 Tip: Always double-check the normal map preview after import to catch any unexpected shading artifacts.

