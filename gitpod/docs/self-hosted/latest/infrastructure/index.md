---
section: self-hosted/latest
title: Kubernetes Setup
---

<script context="module">
  export const prerender = true;
</script>

# Kubernetes Setup

To install Gitpod you need to create a Kubernetes cluster that meet our [requirements](./requirements). For your convenience, we provide some guidance for all supported platforms on the following pages. There you will find examples and scripts that you can adapt to your needs.

- [Amazon Elastic Kubernetes Service (EKS)](./infrastructure/on-amazon-eks)
- [Google Kubernetes Engine (GKE)](./infrastructure/on-gke)
- [Microsoft Azure Kubernetes Service (AKS)](./infrastructure/on-microsoft-aks)
- [K3s](./infrastructure/on-k3s)

## Cert-Manager

Each Kubernetes cluster needs to have a properly configured [cert-manager](https://cert-manager.io/) running.
