import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    prerender: { default: true },
    paths: {
      base: dev ? '' : '/svelte-gh-pages-template',
    },
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  }
};

export default config;