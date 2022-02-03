<style lang="postcss">
  [class|="kumquat"] {
    @apply absolute;
  }

  .kumquat-left {
    @apply h-16 md:h-32 md:w-36 top-24 -left-12 md:-left-24 -z-10;

    @media (max-width: 600px) {
      @apply hidden;
    }
  }

  .kumquat-right {
    @apply h-20 md:h-36 md:w-44 -right-16 md:-right-32 -z-10 bottom-0 md:-bottom-10;

    @media (max-width: 600px) {
      @apply hidden;
    }
  }
</style>

<div
  class="relative card shadow-xl bg-white mt-small md:mt-x-large py-small md:mx-auto rounded-5xl"
>
  <img
    src="/images/startups/kumquat-left.png"
    alt="Gitpod Kumquat"
    class="kumquat-left"
  />
  <p class="text-large italic sm:px-micro lg:px-medium">
    “Using Gitpod will improve your feature velocity and drastically reduce your
    cycle times from commit to deploy.”
  </p>
  <div class="inline-flex flex-col text-left mx-auto mt-x-small">
    <div class="inline-flex items-center">
      <img
        src="/images/startups/fabian-lange.png"
        class="h-14 w-14 sm:h-16 sm:w-16 mr-macro sm:mr-xx-small"
        alt="Fabian Lange"
      />
      <div class="text-gray-900 text-small">
        <p class="font-semibold">Fabian Lange</p>
        <p>Founder & VP Engineering</p>
      </div>
    </div>
    <div class="inline-flex justify-center">
      <img src="/images/startups/instana.png" class="h-10" alt="Instana" />
    </div>
  </div>

  <img
    src="/images/startups/kumquat-right.png"
    alt="Gitpod Kumquat"
    class="kumquat-right"
  />
</div>
