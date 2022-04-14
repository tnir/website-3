---
section: self-hosted/latest
title: Gettings Started with Gitpod Self-Hosted
---

<script context="module">
  export const prerender = true;
</script>

# Getting Started with Gitpod Self-Hosted

> **Note:** Setting up a self-hosted Gitpod instance needs some Kubernetes experience. Detailed guidience on how to setup and maintain a Kubernetes cluster is behind the scope of these docs. See also [_Prerequisites to Install Gitpod Self-Hosted_](../latest#prerequisites-to-install-gitpod-self-hosted).

## Step 1: Create a Kubernetes Cluster

Gitpod is a Kubernetes application that uses Kubernetes internally to provision workspaces as Kubernetes pods. Before you can start with installing Gitpod, you need to create a compatible Kubernetes cluster. Since the steps that are needed to create a proper cluster differ between the cloud providers, it's up to you to setup a cluster that meets the proper [requirements](./requirements). We have created a [list of examples and scripts](./infrastructure) that wil help you to get started with your favorite cloud provider.

## Step 2: Install Cert-Manager

We need cert-manager

## Step 3: Configre DNS

## Step 4: Install Gitpod
