<script context="module">
  export const prerender = true;
</script>

<script>
  import Hero from "$lib/components/hero.svelte";
  import { features } from "$lib/contents/jetbrains-space";
  import CalloutSecondary from "$lib/components/callout-secondary.svelte";
  import CompareFeatures from "$lib/components/jetbrains-space/compare-features.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import SectionFeatures from "$lib/components/section-features.svelte";
  import Feature from "$lib/components/feature.svelte";
  import Section from "$lib/components/section.svelte";
</script>

<style lang="postcss">
  .gitpod-jetbrains {
    :global(.preview) {
      @apply col-start-1 row-start-1;
    }

    :global(.feature) {
      @apply flex-col-reverse;
    }

    :global(.feature) > :global(div:first-child) {
      @apply mb-0 mt-x-small md:mt-0;
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "Gitpod is the vendor neutral, open-source platform that integrates with your individual stack including all JetBrains IDEs.",
    title: "Gitpod vs JetBrains Space",
  }}
/>

<Hero
  title="Gitpod vs JetBrains Space"
  text="Gitpod is the vendor neutral, open-source platform that integrates with
  your individual stack including all JetBrains IDEs."
  image={{
    src: "/images/jetbrains-space/git-providers.png",
    alt: "Git Providers",
  }}
  btnPrimary={{
    href: "/#get-started",
    text: "Try Now",
    onClickHandler: () =>
      window.analytics.track("product_cta_clicked", {
        context: "hero",
        destination: "#get-started",
      }),
  }}
/>

<Section>
  <div class="gitpod-jetbrains">
    <Feature
      feature={{
        title: "JetBrains’ IDEs within Gitpod",
        paragraph:
          "Gitpod and JetBrains joined forces to solve the 'works on my machine' problem. You can work in ephemeral developer environments provisioned by Gitpod using your favorite desktop IDE from JetBrains including IntelliJ IDEA, PyCharm, GoLand, and PhpStorm.",
        image: {
          src: "/images/jetbrains-space/gitpod-jetbrains.png",
          alt: "JetBrains’ IDEs within Gitpod",
          classNames: "w-full max-w-md md:max-w-lg",
        },
        moreButton: {
          text: "More on JetBrains integration",
          href: "/docs/editors",
        },
      }}
    />
  </div>
</Section>

<SectionFeatures title="View the differences" {features} type="box" />

<CompareFeatures />

<CalloutSecondary
  title="Ready to launch your JetBrains IDE within Gitpod?"
  text="If you already have a Gitpod account, simply go to <a href='https://gitpod.io/preferences'>gitpod.io/preferences</a>, select your favourite IDE and open your project. If you are new to Gitpod, hit the `try now` button."
>
  <img
    src="/images/jetbrains-space/jetbrains-ides-in-gitpod.png"
    alt="Jetbrains IDEs available to use with Gitpod"
    slot="image"
    class="max-w-3xl mx-auto mt-small w-full hidden md:block"
  />
  <img
    src="/images/jetbrains-space/jetbrains-ides-in-gitpod-mobile.png"
    alt="Jetbrains IDEs available to use with Gitpod"
    slot="image-mobile"
    class="max-w-xs mx-auto mt-x-small w-full md:hidden"
  />
</CalloutSecondary>
