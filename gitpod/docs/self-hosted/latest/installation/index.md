---
section: self-hosted/latest
title: Installing Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Install Gitpod Self-Hosted

Currently, There are two ways to install Gitpod on a Kubernetes cluster.

## Replicated

> Installing with Replicated is still in Private Beta. Please feel free to try it out, and [give feedback/bug reports](https://github.com/gitpod-io/gitpod/issues/new/choose)

Installing Gitpod using [Replicated](https://www.replicated.com/) takes away all the hassle of installing, maintaining, and upgrading Gitpod from the user. This is automated
by Replicated and also gives the maintainers of Gitpod a way to manage, and publish releases of Gitpod.

Checkout the [Gitpod installation using replicated guide](./installation/replicated).

## Installer

For users who want a more general way of installing Gitpod with a lot more flexibility/configurability, Gitpod installer binary can be used. You will find guides for our supported
platforms with the installer on the following pages:

- [Amazon Elastic Kubernetes Service (EKS)](./installation/on-amazon-eks)
- [Google Kubernetes Engine (GKE)](./installation/on-gke)
- [Microsoft Azure Kubernetes Service (AKS)](./installation/on-microsoft-aks)

For more information see the [README.md](https://github.com/gitpod-io/gitpod/blob/main/install/installer/README.md) of our installer.
