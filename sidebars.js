// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */

//export default {
//  mainSidebar: [

//    // 2) CORE CONCEPTS
//    {
//      type: 'category',
//      label: 'Core Concepts',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'concepts/workflows_graphs', label: 'Workflows & Graphs' },
//        { type: 'doc', id: 'concepts/nodes_connections', label: 'Nodes & Connections' },
//        { type: 'doc', id: 'concepts/backends_models', label: 'Backends & Models' },
//        { type: 'doc', id: 'concepts/multimodal', label: 'Multimodal Processing' },
//        { type: 'doc', id: 'concepts/versioning', label: 'Versioning & Determinism' },
//      ],
//    },

//    // 3) WORKFLOWS LIBRARY
//    {
//      type: 'category',
//      label: 'Workflows Library',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'workflows/overview', label: 'Overview' },
//        { type: 'doc', id: 'workflows/concept_generation', label: 'Concept Generation' },
//        { type: 'doc', id: 'workflows/variation_styling', label: 'Variation & Styling' },
//        { type: 'doc', id: 'workflows/2d_to_3d', label: '2D → 3D' },
//        { type: 'doc', id: 'workflows/api_workflows', label: 'API Workflows' },
//        { type: 'doc', id: 'workflows/architecture', label: 'Architecture & Design' },
//      ],
//    },

//    // 4) NODES (with subcategories; some items are links-to-anchors)
//    {
//      type: 'category',
//      label: 'Nodes',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        {
//          type: 'category',
//          label: 'Image Nodes',
//          collapsed: true,
//          link: { type: 'doc', id: 'nodes/image_nodes' }, // category overview page
//          items: [
//            { type: 'link', label: 'Input Image', href: '/docs/nodes/image-nodes#input-image' },
//            { type: 'doc', id: 'nodes/multimodal', label: 'Multimodal' }, // complex node → own page
//            { type: 'link', label: 'Image to Text', href: '/docs/nodes/image-nodes#image-to-text' },
//          ],
//        },
//        {
//          type: 'category',
//          label: 'Mesh Nodes',
//          collapsed: true,
//          link: { type: 'doc', id: 'nodes/mesh_nodes' },
//          items: [
//            { type: 'doc', id: 'nodes/image_to_3d', label: 'Image to 3D' },
//            { type: 'link', label: 'Texture Mesh', href: '/docs/nodes/mesh-nodes#texture-mesh' },
//          ],
//        },
//        {
//          type: 'category',
//          label: 'API Nodes',
//          collapsed: true,
//          link: { type: 'doc', id: 'nodes/api_nodes' },
//          items: [
//            { type: 'link', label: 'API Input', href: '/docs/nodes/api-nodes#api-input' },
//            { type: 'link', label: 'API Output', href: '/docs/nodes/api-nodes#api-output' },
//            { type: 'link', label: 'Publish API', href: '/docs/nodes/api-nodes#publish-api' },
//          ],
//        },
//        {
//          type: 'category',
//          label: 'Post-Process Nodes',
//          collapsed: true,
//          link: { type: 'doc', id: 'nodes/postprocess_nodes' },
//          items: [
//            { type: 'link', label: 'Color Adjust', href: '/docs/nodes/postprocess-nodes#color-adjust' },
//            { type: 'link', label: 'Depth Refine', href: '/docs/nodes/postprocess-nodes#depth-refine' },
//          ],
//        },
//        {
//          type: 'category',
//          label: 'Utility Nodes',
//          collapsed: true,
//          link: { type: 'doc', id: 'nodes/utility_nodes' },
//          items: [
//            { type: 'link', label: 'Input Text', href: '/docs/nodes/utility-nodes#input-text' },
//            { type: 'link', label: 'Retrieve Images', href: '/docs/nodes/utility-nodes#retrieve-images' },
//          ],
//        },
//      ],
//    },

//    // 5) BACKENDS (separate from Nodes)
//    {
//      type: 'category',
//      label: 'Backends',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'backends/overview', label: 'Overview' },
//        { type: 'doc', id: 'backends/multimodal', label: 'Multimodal Backends' },
//        { type: 'doc', id: 'backends/image_to_3d', label: 'Image → 3D Backends' },
//        { type: 'doc', id: 'backends/llm', label: 'LLM Backends' },
//        { type: 'doc', id: 'backends/postprocess', label: 'Post-Processing Engines' },
//        { type: 'doc', id: 'backends/benchmarking', label: 'Benchmark & Comparison' },
//      ],
//    },

//    // 6) API & INTEGRATIONS
//    {
//      type: 'category',
//      label: 'API & Integrations',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'api/overview', label: 'REST API Overview' },
//        { type: 'doc', id: 'api/auth', label: 'Authentication' },
//        { type: 'doc', id: 'api/endpoints', label: 'Endpoints Reference' },
//        { type: 'doc', id: 'integrations/unreal', label: 'Unreal Plugin' },
//        { type: 'doc', id: 'integrations/blender', label: 'Blender' },
//      ],
//    },

//    // 7) RUNNING & SCALING
//    {
//      type: 'category',
//      label: 'Running & Scaling',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'scale/batch', label: 'Batch Execution' },
//        { type: 'doc', id: 'scale/caching', label: 'Caching & Reuse' },
//        { type: 'doc', id: 'scale/parallel', label: 'Parallel Runs' },
//        { type: 'doc', id: 'scale/perf', label: 'Performance Tips' },
//      ],
//    },

//    // 8) EVALUATION & BENCHMARKING
//    {
//      type: 'category',
//      label: 'Evaluation & Benchmarking',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'eval/metrics', label: 'Quality Metrics' },
//        { type: 'doc', id: 'eval/model_comparison', label: 'Model Comparison Workflow' },
//      ],
//    },

//    // 9) OPERATIONS & GOVERNANCE
//    {
//      type: 'category',
//      label: 'Operations & Governance',
//      collapsed: true,
//      collapsible: true,
//      link: null,
//      items: [
//        { type: 'doc', id: 'ops/data', label: 'Data Handling & Storage' },
//        { type: 'doc', id: 'ops/version_control', label: 'Version Control & Rollback' },
//        { type: 'doc', id: 'ops/security', label: 'Security & Privacy' },
//      ],
//    },

//    // 10) TROUBLESHOOTING & FAQ
//    {
//      type: 'category',
//      label: 'Troubleshooting & FAQ',
//      collapsed: true,
//      collapsible: true,
//      link: { type: 'doc', id: 'troubleshooting/index' },
//      items: [
//        { type: 'doc', id: 'troubleshooting/common_errors', label: 'Common Errors' },
//        { type: 'doc', id: 'troubleshooting/integration_issues', label: 'Integration Issues' },
//      ],
//    },


//    // 11) RELEASE NOTES (auto-generated index page)
//    {
//      type: 'category',
//      label: 'Release Notes',
//      collapsed: true,
//      collapsible: true,
//      link: { type: 'generated-index', title: 'Release Notes' },
//      items: [
//        { type: 'doc', id: 'releases/2025-11', label: '2025-11' },
//        { type: 'doc', id: 'releases/2025-10', label: '2025-10' },
//      ],
//    },
//  ],
//};

// sidebars.js
module.exports = {
  mainSidebar: [

    // 1) Get Started
    // 1) Get Started
    // 1) Get Started
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      collapsible: false,
      className: 'sidebar-main',
      link: null,
      items: [
        { type: 'doc', id: 'index', label: 'Overview', className: 'sidebar-title' },
        { type: 'doc', id: 'concepts/projects_overview', label: 'Projects Overview', className: 'sidebar-title' },
        { type: 'doc', id: 'using_user_interface', label: 'Using User Interface', className: 'sidebar-title' },
        { type: 'doc', id: 'writing_effective_prompts', label: 'Writing Effective Prompts', className: 'sidebar-title' },
      ],
    },

    // 2) CORE CONCEPTS
    // 2) CORE CONCEPTS
    // 2) CORE CONCEPTS
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      collapsible: false,
      className: 'sidebar-main',
      link: null,
      items: [
        { type: 'doc', id: 'concepts/workflows_graphs', label: 'Workflows & Graphs', className: 'sidebar-title' },
        { type: 'doc', id: 'concepts/nodes_connections', label: 'Nodes & Connections', className: 'sidebar-title' },
        { type: 'doc', id: 'concepts/backends_models', label: 'Backends & Models', className: 'sidebar-title' },
        { type: 'doc', id: 'concepts/multimodal', label: 'Multimodal Processing', className: 'sidebar-title' },
        { type: 'doc', id: 'concepts/versioning', label: 'Versioning & Determinism', className: 'sidebar-title' },
      ],
    },

    // 3) WORKFLOWS LIBRARY
    // 3) WORKFLOWS LIBRARY
    // 3) WORKFLOWS LIBRARY
    {
      type: 'category',
      label: 'Workflows Library',
      collapsed: false,
      collapsible: false,
      className: 'sidebar-main',
      link: null,
      items: [
        { type: 'doc', id: 'workflows/overview', label: 'Overview', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/concept_generation', label: 'Concept Generation', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/variation_styling', label: 'Variation & Styling', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/2d_to_3d', label: '2D → 3D', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/api_workflows', label: 'API Workflows', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/architecture', label: 'Architecture & Design', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/sketch-to-asset', label: 'Sketch to Asset', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/image-to-spline', label: 'Image to Spline', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/2d-variants', label: '2D Variants', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/asset-segmentation', label: 'Asset Segmentation', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/kitbash-creator', label: 'Kitbash Creator', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/moodboard-to-assetkit', label: 'Moodboard to Assetkit', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/marketing-assets', label: 'Marketing Assets', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/conceptart-to-assetkit', label: 'Concept Art to Assetkit', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/building-generator', label: 'Building Generator', className: 'sidebar-title' },
        { type: 'doc', id: 'workflows/conceptart-generator', label: 'Concept Art Generator', className: 'sidebar-title' },
      ],
    },

    // 4) NODES
    // 4) NODES
    // 4) NODES
    {
      type: 'category',
      label: 'Nodes',
      collapsed: false,
      collapsible: false,
      className: 'sidebar-main',
      link: null,
      items: [
        {
          type: 'category',
          label: 'Image Nodes',
          collapsed: true,
          className: 'sidebar-title',
          link: { type: 'doc', id: 'nodes/image_nodes' }, // category overview page
          items: [
            { type: 'link', label: 'Input Image', href: '/docs/nodes/image-nodes#input-image', className: 'sidebar-title' },
            { type: 'doc', id: 'nodes/multimodal', label: 'Multimodal', className: 'sidebar-title' }, // complex node → own page
            { type: 'link', label: 'Image to Text', href: '/docs/nodes/image-nodes#image-to-text', className: 'sidebar-title' },
          ],
        },
        {
          type: 'category',
          label: 'Video Nodes',
          collapsed: true,
          className: 'sidebar-title',
          link: { type: 'doc', id: 'nodes/video_nodes' },
          items: [],
        },
        {
          type: 'category',
          label: 'Mesh Nodes',
          collapsed: true,
          className: 'sidebar-title',
          link: { type: 'doc', id: 'nodes/mesh_nodes' },
          items: [
            { type: 'doc', id: 'nodes/image_to_3d', label: 'Image to 3D', className: 'sidebar-title' },
            { type: 'link', label: 'Texture Mesh', href: '/docs/nodes/mesh-nodes#texture-mesh', className: 'sidebar-title' },
          ],
        },
        {
          type: 'category',
          label: 'API Nodes',
          collapsed: true,
          className: 'sidebar-title',
          link: { type: 'doc', id: 'nodes/api_nodes' },
          items: [
            { type: 'link', label: 'API Input', href: '/docs/nodes/api-nodes#api-input', className: 'sidebar-title' },
            { type: 'link', label: 'API Output', href: '/docs/nodes/api-nodes#api-output', className: 'sidebar-title' },
            { type: 'link', label: 'Publish API', href: '/docs/nodes/api-nodes#publish-api', className: 'sidebar-title' },
          ],
        },
        {
          type: 'category',
          label: 'Post-Process Nodes',
          collapsed: true,
          className: 'sidebar-title',
          link: { type: 'doc', id: 'nodes/postprocess_nodes' },
          items: [
            { type: 'link', label: 'Color Adjust', href: '/docs/nodes/postprocess_nodes#color-adjust', className: 'sidebar-title' },
            { type: 'link', label: 'Depth Refine', href: '/docs/nodes/postprocess_nodes#depth-refine', className: 'sidebar-title' },
          ],
        },
        {
          type: 'category',
          label: 'Utility Nodes',
          collapsed: true,
          className: 'sidebar-title',
          link: { type: 'doc', id: 'nodes/utility_nodes' },
          items: [
            { type: 'link', label: 'Input Text', href: '/docs/nodes/utility_nodes#input-text', className: 'sidebar-title' },
            { type: 'link', label: 'Retrieve Images', href: '/docs/nodes/utility_nodes#retrieve-images', className: 'sidebar-title' },
          ],
        },
      ],
    },


    // Group 3: Troubleshooting
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: false,
      collapsible: false,
      className: 'sidebar-title',
      items: [
        { type: 'doc', id: 'known_issues_limitations', label: 'Known Issues & Limitations' },
      ],
    },

    // Group 4: Tutorial Extras (these exist in your repo)
//    {
//      type: 'category',
//      label: 'Tutorial Extras',
//      collapsed: true,
//      items: [
//        { type: 'doc', id: 'tutorial-extras/manage-docs-versions', label: 'Manage Docs Versions' },
//        { type: 'doc', id: 'tutorial-extras/translate-your-site', label: 'Translate Your Site' },
//      ],
//    },

    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: true,
      collapsible: true,
      link: null,
      items: [
        { type: 'doc', id: 'concepts/workflows_graphs', label: 'Workflows & Graphs' },
        { type: 'doc', id: 'concepts/nodes_connections', label: 'Nodes & Connections' },
        { type: 'doc', id: 'concepts/backends_models', label: 'Backends & Models' },
        { type: 'doc', id: 'concepts/multimodal', label: 'Multimodal Processing' },
        { type: 'doc', id: 'concepts/versioning', label: 'Versioning & Determinism' },
      ],
    },

  ],
};



//export default sidebars;
