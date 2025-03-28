---
id: asset_generation_workflow
title: Asset Generation Workflow
sidebar: false
---

This section will walk you through the basic workflow of using [Atlas Platform](https://your-platform-url.com), from starting a session to exporting fully textured 3D game assets.

Atlas is not just a one-click generator — it’s a creative platform that guides you through a complete pipeline for game asset development, powered by AI and enhanced with our proprietary texturing system.

### 🗂️ 1. Create a New Session

Begin by creating a **session**. A session allows you to:
- Save your progress and data
- Return later to edit or continue asset creation
- Organize assets for a specific project or game

Sessions are essential for building full asset libraries over time.

### 💬 2. Generate Concept Images with the AI Agent
![2D concept art generation](..\static\img\asset_workflow\2d_concept_art.jpg)
Once your session is active:
- **Chat with the AI agent** to describe the assets you need
- The agent will generate a set of **2D concept images** based on your description
- These are tailored suggestions for your game asset ideas

> The better your prompt, the more accurate and relevant the concept images will be.

#### 🎨 Refine and Tweak the Images

If needed, you can:
- Continue chatting with the agent to **tweak or iterate** on the results
- Ask for style changes, shape variations, or additional ideas
- Select the images that best match your asset vision
- You can use style images that matches your needs to restyle the 2D images to match your style

### 🧱 3. Generate 3D Models from Selected Images
![img to 3D](..\static\img\asset_workflow\img_to_3d.jpg)
After selecting the desired 2D concepts:
- Generate **3D models** directly from those images
- Models will be created in a simplified form for preview and structure validation
- Using your own 2D images for assets is also possible 

### ✨ 4. Run ART Core for High-Quality Texturing
![ART Core output](..\static\img\asset_workflow\art_core_output.jpg)

> ART Core is a proprietary technology developed in-house and exclusive to Atlas Platform.

If you're satisfied with the mesh:
- Launch **ART Core**, our proprietary system for **ultra-detailed 3D texturing** (up to 8K resolution)
    > Example: *"Generate High Quality textures using ART core for the assets in the referal assets tray"*
- This step may take some time, depending on asset complexity
- ART core raw output is a mesh with only RGB and displacement maps (if dispalacement generated) so once the job is finished you can download the date and view the mesh details.
- You can use style images to drive the style for the generated textures
    > Example: *"Use the image in the referal assets tray as style image for ART core generation"*
    - Cyberpunk Style Image
    ![Cyberpunk](..\static\img\asset_workflow\cyberpunk_style.jpg)
    - Medieval Assets With Cyberpunk Style applied
    ![Medieval cyberpunk](..\static\img\asset_workflow\2d_concept_art_cyberpunk_style.jpg)

- Once you're happy with the textures from ART core you can **Use the** `"low-poly and PBR"` **keyword** to get an optimized low-poly game asset with baked PBR textures
    > Example: *"Generate low-poly with PBR materials for the assets in the referal assets tray"*

### 📦 5. Export Your Assets

Once your asset is finalized:
- **Download it** as a `.blend` file (for Blender)
    - Assets rendered in Blender
    ![export blender](..\static\img\asset_workflow\art_core_output.jpg)
- The `.glb` format is also available and it's recommended for Unreal Engine and other tools
    - .glb file asset in Unreal Engine 5
    ![export blender](..\static\img\asset_workflow\export_unrealengine.jpg)
- Assets include textures and are ready for integration into your game project

