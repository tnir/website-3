<script lang="ts">
  import Section from "../section.svelte";
  import Card from "$lib/components/ui-library/card";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<style>
  code {
    padding: 1em;
    background: #999;
    color: #fff;
    font-weight: 600;
    display: inline-block;
  }
</style>

<Card size="medium">
  <Section
    id="install-locally"
    class="flex flex-col max-w-2xl mx-auto lg:max-w-none lg:flex-row items-center px-micro py-small sm:px-small sm:py-medium lg:space-x-small xl:py-24 xl:px-20 xl:space-x-20"
  >
    <div class="mb-x-small lg:mb-0">
      <img
        src="https://user-images.githubusercontent.com/849592/159968685-b6a8b825-acb0-4986-bc74-2203fcf28238.jpg"
        alt="Open in Gitpod button added via the Gitpod Browser Extension"
      />
    </div>
    <div>
      <h3 class="h3">Install Gitpod locally</h3>
      <p class="mt-xx-small mb-x-small">
        Install Gitpod on a single macOS, Windows, or Linux machine running
        docker.
      </p>
      <code>
        curl
        https://raw.githubusercontent.com/MrSimonEmms/gitpod-single-instance/develop/run.sh
        | bash
      </code>
      <LinkButton
        href="/docs/install-locally"
        size="medium"
        variant="primary"
        class="mt-x-small"
      >
        More about local installs
      </LinkButton>
    </div>
  </Section>
</Card>
