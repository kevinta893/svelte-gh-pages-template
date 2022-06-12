# svelte-gh-pages-template

A basic gh-pages template for Svelte. Preconfigured svelte-kit Skeleton Project for Typescript.

[Demo Link](https://github.com/kevinta893/svelte-gh-pages-template)

## Configuration

1. Set up `gh-pages.js` for your repository. See [gh-pages](https://www.npmjs.com/package/gh-pages)
2. In `svelte.config.js`, setup the `config.kit.paths.base` variable to your repository name

## Development

The `packages.json` is preconfigured with scripts to help with development

- Install node packages: `npm install`
- To run development server locally: `npm run dev` 
- To build website for deployment use: `npm run build`
- To deploy (also builds) to gh-pages use: `npm run deploy`