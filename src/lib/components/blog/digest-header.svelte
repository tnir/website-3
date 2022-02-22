<script lang="ts">
  import Header from "../header.svelte";
  import TwitterFollowButton from "../t-button.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<Header
  title="DevX Digest"
  text=" Our newsletter where we cover everything about Developer Experience"
  textClassNames="text-medium mb-x-small"
  tight={true}
>
  <div
    slot="content"
    class="flex justify-center items-center flex-wrap space-x-4"
  >
    <LinkButton
      variant="primary"
      size="medium"
      href="https://gitpod.io/notifications"
      target="_blank"
      data-analytics={`{"context":"dashboard"}`}
      >Signup for the Newsletter</LinkButton
    >
    <TwitterFollowButton variant="secondary" />
  </div>
</Header>
