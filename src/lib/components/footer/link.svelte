<script lang="ts">
  export let href: string;
  export let rel: string = "";
  export let target: string = "";
  export let analytics: string = "";
  export let highlight = false;

  let clazz: string = "";
  export { clazz as class };
</script>

<style lang="postcss">
  .highlight {
    @apply relative;
    &::after {
      content: url("/indicator.svg");
      @apply absolute -top-3 -right-2;
    }
  }
</style>

<a
  {href}
  {rel}
  {target}
  data-analytics={analytics}
  on:click
  class:highlight
  class="
    text-dark-grey
    dark:text-divider
    no-underline
    focus:text-black
    hover:text-black
    active:text-black
    dark:focus:text-dark-white
    dark:hover:text-dark-white
    dark:active:text-dark-white
    {clazz}
  "
>
  <slot />
</a>
