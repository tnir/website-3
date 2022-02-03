<script lang="ts" context="module">
  export const prerender = true;
  export async function load({ session }) {
    const changelogEntries = session.changelogEntries;
    return { props: { changelogEntries } };
  }
</script>

<script lang="ts">
  import type { ChangelogEntry as ChangelogEntryType } from "$lib/types/changelog-entry.type";

  import { onMount } from "svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import "$lib/assets/markdown-commons.scss";
  import TwitterFollowButton from "$lib/components/t-button.svelte";
  import { formatDate, stringToBeautifiedFragment } from "$lib/utils/helpers";
  import ChangelogDate from "$lib/components/changelog/changelog-date.svelte";
  import ChangelogLink from "$lib/components/changelog/changelog-link.svelte";
  import Wrapper from "$lib/components/changelog/wrapper.svelte";
  import Header from "$lib/components/header.svelte";

  export let changelogEntries: ChangelogEntryType[];

  onMount(() => {
    Array.from(document.getElementsByClassName("toc")).forEach((toc) =>
      toc.remove()
    );
  });
</script>

<style lang="postcss">
  .changelog-entry {
    @apply flex flex-col md:flex-row last:pb-x-large md:last:pb-xx-large;

    & + .changelog-entry {
      @apply pt-x-large md:pt-xx-large;
    }
  }
</style>

<OpenGraph
  data={{
    description: "New features and improvements to Gitpod.",
    title: "Changelog",
    type: "website",
  }}
/>

<div class="flex">
  <div class="hidden w-4/12 md:block" />
  <Header
    title="Changelog"
    text="Gitpod product improvements and updates"
    class="w-full"
    textAlign="left"
  >
    <div slot="content" class="buttons-wrapper pt-x-small">
      <TwitterFollowButton class="btn-primary" />
      <a
        href="https://gitpod.io/notifications"
        target="_blank"
        class="btn-secondary"
        data-analytics={`{"context":"dashboard"}`}
        >Signup for the Newsletter
      </a>
    </div>
  </Header>
</div>

<div
  class="flex flex-col space-y-x-large md:space-y-xx-large divide-y divide-gray-300"
>
  {#each changelogEntries as { date, title, content, image, alt }}
    <div class="changelog-entry">
      <ChangelogDate
        date={formatDate(date)}
        href={`/changelog/${stringToBeautifiedFragment(title)}`}
      />
      <Wrapper class="content-changelog w-full md:w-8/12">
        <img src="/images/changelog/{image}" class="rounded-3xl" {alt} />
        <h2>
          <ChangelogLink
            href={`/changelog/${stringToBeautifiedFragment(title)}`}
          >
            {title}
          </ChangelogLink>
        </h2>
        {@html content}
      </Wrapper>
    </div>
  {/each}
</div>
