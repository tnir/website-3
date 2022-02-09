<script lang="ts">
  import Section from "./section.svelte";
  import type { ExploreSection } from "$lib/types/explore-section.type";

  export let contents: ExploreSection = {};

  const {
    title = "Get Started <span>for&nbsp;Free</span>",
    description = "Spin up fresh, automated dev environments for each task, in the cloud, in seconds.",
    note = "",
    link = {
      text: "Try Now",
      href: "/#get-started",
    },
    secondaryLink,
    useKumquatIllustration = false,
  } = contents;
</script>

<style lang="postcss">
  .explore {
    border-radius: 4rem;
  }

  @media (max-width: 830px) {
    .explore {
      @apply flex-col rounded-2xl mx-auto;
      max-width: 345px;
    }
  }

  .h1 {
    @apply mb-micro;

    @media (max-width: 830px) {
      @apply mb-macro;

      :global(span) {
        @apply hidden;
      }
    }
  }

  .explore__text {
    @apply px-large;
    flex: 0 0 45%;

    @media (max-width: 1280px) {
      @apply pr-0 md:pl-small lg:pl-large;
    }

    @media (max-width: 830px) {
      @apply pt-xx-small px-xx-small;
    }
  }

  .explore__paragraph {
    @apply mb-x-small;
    max-width: 465px;

    @media (max-width: 830px) {
      @apply max-w-sm mb-xx-small;
    }
  }

  .explore__illustration {
    flex: 1;
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;

    @media (min-width: 1280px) {
      background: none !important;
    }
  }

  .explore__illustration .small {
    @apply hidden;
  }

  .explore__illustration img {
    @apply float-right;
    border-radius: inherit;

    @media (max-width: 1280px) {
      display: none;
    }
  }

  @media (max-width: 830px) {
    .explore__illustration {
      background: none !important;
    }

    .explore__illustration img {
      @apply hidden;
    }

    .explore__illustration .small {
      @apply block;
    }
  }
</style>

<Section>
  <div
    class="explore flex xl:items-center bg-off-white shadow-normal max-w-none text-left"
  >
    <div class="explore__text md:py-medium xl:py-0">
      <h2 class="h1">{@html title}</h2>
      <p class="explore__paragraph text-p-large">
        {@html description}
      </p>
      {#if note}
        <p class="h5 font-semibold text-gray-900 mb-x-small md:-mt-micro">
          {note}
        </p>
      {/if}
      <div class="buttons-wrapper pb-small sm:pb-micro md:pb-0">
        <a
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : null}
          class="btn-conversion">{link.text}</a
        >
        {#if secondaryLink}
          <a
            href={secondaryLink.href}
            target={secondaryLink.href.startsWith("http") ? "_blank" : null}
            class="btn-cta">{secondaryLink.text}</a
          >
        {/if}
      </div>
    </div>
    <div
      class="explore__illustration w-full bg-cover bg-left"
      style="background-image: url(/images/{useKumquatIllustration
        ? 'kumquat.png'
        : 'illustration-grid.png'});"
    >
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-grid.png'}"
        alt="Gitpod in a Nutshell"
      />
      <img
        src="/images/{useKumquatIllustration
          ? 'kumquat.png'
          : 'illustration-small.png'}"
        class:pt-micro={useKumquatIllustration}
        class="small"
        alt="Gitpod in a Nutshell"
      />
    </div>
  </div>
</Section>
