<script context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import Secure from "$lib/components/security/secure.svelte";
  import Program from "$lib/components/security/program.svelte";
  import CallToAction from "$lib/components/security/call-to-action.svelte";
  import Report from "$lib/components/security/report.svelte";
  import OpenGraph from "$lib/components/open-graph.svelte";
  import UsedBy from "$lib/components/index/used-by.svelte";
  import Header from "$lib/components/header.svelte";
  import LinkButton from "$lib/components/ui-library/link-button";
</script>

<OpenGraph
  data={{
    description: "Does Gitpod encrypt data?",
    title: "Security",
  }}
/>

<Header
  title="Security at Gitpod"
  text="Gitpod is trusted by over 500k developers and companies that are moving
  their dev environments to the cloud."
  textClassNames="text-large max-w-2xl mx-auto mb-x-small"
  tight={true}
>
  <LinkButton variant="primary" size="medium" href="/contact/support"
    >Talk to an expert</LinkButton
  >
</Header>

<UsedBy
  title="Trusted by developer led companies"
  class="bg-off-white rounded-2xl shadow-normal pt-small pb-9"
  style="margin-top: 0"
/>
<Secure />
<Program />
<CallToAction />
<Report />
