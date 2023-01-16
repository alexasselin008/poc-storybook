# poc-storybook
Proof of concept of a multiple use case of storybook, storybook composition, and storybook presets that could be used by ShareGate


This repo will contain 4 demo projects
- *demo-cra*: Folder containing one CRA (with craco) project with a storybook integration
- *demo-nextjs*: Folder containing one NextJS project with a storybook integration
- *demo-reactlib*: Folder containing one React Library project with a storybook integration
- *demo-composition*: Folder containing one Storybook that serves as a root composition of all 3 other demo projects.
    - Must contain one story

All project must support
- TypeScript
- Mdx and CSF story files
- SVGR icon imports
- Aliases

This repo will also contain
- Storybook preset 
    - Base theming
    - Basic configuration of addons?
    - Orbit Theming
    - Orbit Color Scheme
    - Orbit Viewports
    

---------------------------------------
Questions 
- Could i create an icon gallery component reusable by all the products?
- Test Turbosnap  with chromatic
- Is there a good way to split chromatic stories vs documentation stories?
- Example of interaction test/playtest?
- What would the demo app look with an Atomic Design categorization?
- What's the best way to write stories in mdx so that documentation stories and chroma stories are separated




