<script lang="ts">
  import Toggle from "$lib/components/toggle.svelte";
  import Section from "../../section.svelte";
  import HostGitpodYourself from "./host-gitpod-yourself.svelte";
  import LaunchExampleWorkspace from "./launch-example-workspace.svelte";
  import LinkGitRepository from "./link-git-repository.svelte";

  let checked: boolean = false;

  const handleChange = () => {
    checked = !checked;
  };
</script>

<style lang="postcss">
  h2 {
    @apply mb-x-small;
  }

  .cards-container {
    @apply flex;

    @media (max-width: 944px) {
      @apply flex-col mx-auto;
      max-width: 600px;
    }
  }

  .card {
    @apply p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-white text-center;
    flex: 0 0 49%;

    @media (max-width: 1140px) {
      padding: var(--small) var(--x-small);
    }

    &:not(:last-child) {
      @media (max-width: 944px) {
        @apply mb-x-small;
      }
    }
  }
</style>

<Section id="get-started" class="pt-20">
  <h2 class="mb-small text-center text-h2">Get started now</h2>
  <Toggle
    labelLeft="SaaS"
    labelRight="Self-hosted"
    on:change={handleChange}
    {checked}
    class="mb-x-small"
    id="saas-self-hosted"
  />
  <div
    class="cards-container"
    class:justify-center={checked}
    class:justify-between={!checked}
  >
    {#if checked}
      <div class="card shadow-normal">
        <HostGitpodYourself />
      </div>
    {:else}
      <div class="card shadow-normal">
        <LinkGitRepository />
      </div>
      <div class="card">
        <LaunchExampleWorkspace />
      </div>
    {/if}
  </div>
</Section>
