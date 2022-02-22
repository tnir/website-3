<script lang="ts">
  import type { ContactCard } from "$lib/types/contact-card.type";
  import LinkButton from "$lib/components/ui-library/link-button";

  export let contactCard: ContactCard;
</script>

<style lang="postcss">
  p {
    color: var(--dark-grey);
  }
</style>

<div
  class="p-xx-small sm:py-small sm:px-x-small md:p-medium rounded-2xl bg-off-white text-center shadow-xl"
>
  <!-- svelte-ignore a11y-missing-attribute -->
  <img
    src="/images/contact/{contactCard.image}"
    height={contactCard.imgHeight}
    width={contactCard.imgWidth}
    role="presentation"
  />
  <h2 class="h3">{contactCard.title}</h2>
  <p>{contactCard.description}</p>
  <LinkButton
    variant="primary"
    class="m-8"
    on:click={() => {
      if (contactCard.tracking) contactCard.tracking();
    }}
    size="large"
    href={contactCard.btnHref}>{contactCard.btnText}</LinkButton
  >
</div>
