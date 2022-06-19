import { publish } from 'gh-pages';

// Update to point to your repository
const username = 'kevinta893';
const repositoryName = 'svelte-gh-pages-template';

publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: `https://github.com/${username}/${repositoryName}.git`,
    user: {
      name: username,
    },
    dotfiles: true
  },
  () => {
    const ghPageUrl = `https://${username}.github.io/${repositoryName}`;
    console.log('Deploy Complete!');
    console.log('Remote URL: ' + ghPageUrl)
  }
);