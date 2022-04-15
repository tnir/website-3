<script lang="ts">
  import type { CardBackground, CardSize } from "./card";

  let className: string = "";
  export { className as class };
  export let background: CardBackground = "card";
  export let brandShadow: boolean = false;
  export let size: CardSize;
  export let styles: string = "";
</script>

<style lang="postcss">
  .small {
    @apply rounded-2xl;
  }
  .medium {
    @apply rounded-2xl md:rounded-5xl;
  }

  .white {
    @apply bg-white;
  }

  .card {
    @apply bg-card;
  }

  .brand {
    @apply shadow-brand;
  }
</style>

<div
  class:brand={brandShadow}
  style={styles}
  class="shadow-normal {background} {size} {className}"
>
  <slot />
</div>
