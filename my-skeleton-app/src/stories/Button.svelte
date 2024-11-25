<script>
  import './button.css';

  /**
   * Is this the principal call to action on the page?
   */
  export let primary = false;

  /**
   * @type {string} What background color to use
   */
  export let backgroundColor = undefined;

  /**
   * @type {'small' | 'medium' | 'large'} How large should the button be?
   */
  export let size = 'medium';

  /**
   * @type {string} Button contents
   */
   export let label = 'Click me';
   export let onClick = () => {};

  $: mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  $: style = backgroundColor ? `background-color: ${backgroundColor}` : '';
</script>

<button on:click={onClick}>
  {label}
</button>

<style>
  button {
    background-color: darkblue;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>

