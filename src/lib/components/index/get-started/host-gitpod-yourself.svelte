<script lang="ts">
  const selfHostedButtons = [
    {
      text: "Install on GKE",
      icon: {
        src: "/svg/index/gke.svg",
        alt: "Google Kubernetes Engine",
      },
      href: "/docs/self-hosted/latest/installation/on-gke/",
    },
    {
      text: "Install on EKS",
      icon: {
        src: "/svg/index/eks.svg",
        alt: "Amazon Elastic Kubernetes Service",
      },
      href: "/docs/self-hosted/latest/installation/on-amazon-eks",
    },
    {
      text: "Install on AKS",
      icon: {
        src: "/svg/index/aks.svg",
        alt: "Azure Kubernetes Service",
      },
      href: "/docs/self-hosted/latest/installation/on-microsoft-aks",
    },
    {
      text: "Install on K3s",
      icon: {
        src: "/svg/index/k3s.svg",
        alt: "Kubernetes",
      },
      href: "/docs/self-hosted/latest/installation/helm-on-kubernetes",
    },
  ];
</script>

<h3>Host Gitpod yourself</h3>
<p class="max-w-xs mx-auto">
  Run Gitpod on your own infrastructure. Free for up to 10 users.
</p>

<div class="my-x-small space-y-3">
  {#each selfHostedButtons as { href, text, icon }}
    <a
      {href}
      class="flex items-center w-60 mx-auto p-2 px-xx-small rounded-2xl bg-off-white font-semibold hover:bg-orange-700 focus:bg-orange-700 transition-all duration-200 shadow-light"
    >
      <img src={icon.src} alt={icon.alt} class="h-6 w-8 mr-micro" />
      {text}
    </a>
  {/each}
</div>

<p class="text-small">
  <a href="/self-hosted#features">View features</a> or
  <a href="/docs/self-hosted/latest">read documentation</a>
</p>
