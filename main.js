import Button from './my-skeleton-app/Button.svelte';

const app = new Button({
  target: document.getElementById('app'),
  props: {
    label: 'Click Me!',
  },
});

export default app;
