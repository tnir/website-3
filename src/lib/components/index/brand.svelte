<script lang="ts">
  import type { Brand } from "$lib/types/brand.type";

  export let brand: Brand;

  const { logo, alt, transform, className } = brand;
</script>

<style lang="scss">
  img {
    width: 5.9375rem;
  }

  .brand {
    @apply max-h-16;
    flex-basis: calc(14% - 1.375rem);
    min-width: 130px;
    display: flex;
    border: 2px solid transparent;
    justify-content: center;
    margin: 0.75rem;

    .fcc {
      @media (min-width: 841px) {
        width: 8.125rem;
        transform: translateX(-0.625rem);
      }
    }
  }
</style>

<div class="brand">
  <img
    src={`/${logo}`}
    {alt}
    style={`transform: ${transform}`}
    class={className}
  />
</div>
