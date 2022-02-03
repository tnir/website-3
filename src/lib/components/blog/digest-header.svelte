<script lang="ts">
  import Header from "../header.svelte";
  import TwitterFollowButton from "../t-button.svelte";
</script>

<Header
  title="DevX Digest"
  text=" Our newsletter where we cover everything about Developer Experience"
  textClassNames="text-medium mb-x-small"
  tight={true}
>
  <div slot="content" class="buttons-wrapper justify-center">
    <a
      class="btn-primary"
      href="https://gitpod.io/notifications"
      target="_blank"
      data-analytics={`{"context":"dashboard"}`}
      >Signup for the Newsletter
    </a>
    <TwitterFollowButton class="btn-secondary" />
  </div>
</Header>
