<script lang="ts">
  import Header from "../header.svelte";

  export let title: string;
</script>

<Header {title}>
  <div slot="content">
    <p class="text-large">
      <slot name="description" />
    </p>
    <a
      target="_blank"
      href="https://gitpod.io/plans"
      class="btn-conversion mt-x-small"
    >
      Claim Offer
    </a>
  </div>
</Header>
