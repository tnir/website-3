<script context="module">
  export const prerender = true;
</script>

<script>
  import { exploreContents } from "$lib/contents/startups";

  import Explore from "$lib/components/explore.svelte";
  import Find from "$lib/components/startups/find.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import Header from "$lib/components/header.svelte";
</script>

<OpenGraph
  data={{
    title: "Approved Organisations | Gitpod for Startups",
    description:
      "If your startup is affiliated with a Gitpod approved VC, incubator or accelerator we will extend the Gitpod startup program from 1 year to 2 years.",
  }}
/>

<Header
  title="Approved Organisations"
  text="If your startup is affiliated with a Gitpod approved VC, incubator or
  accelerator we will extend the Gitpod startup program from 1 year to 2
  years."
>
  <a slot="content" href="/for/startups" class="btn-conversion mt-x-small"
    >View startup program</a
  >
</Header>

<Find />

<Explore contents={exploreContents} />
