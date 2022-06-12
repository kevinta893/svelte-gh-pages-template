import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/kevinta893/svelte-gh-pages-template.git', // Update to point to your repository
  user: {
   name: 'kevinta893',
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);