<script lang="ts">
  export let image: { src: string; alt: string };
  export let title: string;
  export let text: string;
  const { src, alt } = image;
</script>

<style lang="postcss">
  h2 {
    @apply mt-0 mb-macro;
  }

  p {
    @apply my-0;
  }
</style>

<div class="flex sm:items-center flex-col sm:flex-row mt-16 mb-x-small">
  <img {src} {alt} class="h-20 w-20 sm:h-24 sm:w-auto p-2" />
  <div class="sm:pl-xx-small">
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
</div>
