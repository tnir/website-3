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

<div class="flex items-center mt-16 mb-x-small">
  <img {src} {alt} class="h-24" />
  <div class="pl-xx-small">
    <h2>{title}</h2>
    <p>{text}</p>
  </div>
</div>
