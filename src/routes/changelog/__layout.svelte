<script lang="ts">
  import { page } from "$app/stores";
</script>

<svelte:head>
  {#if !$page.url.pathname.endsWith("changelog")}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

<slot />
