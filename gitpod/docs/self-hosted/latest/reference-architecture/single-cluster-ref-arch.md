---
section: self-hosted/latest
subsection: installation-guides
title: "Single-Cluster Reference Architecture"
---

<script context="module">
  export const prerender = true;
</script>

<script lang="ts">

  import Overview from "./_chunks/overview.md";
  import Preparations from "./_chunks/preparations.md";
  import Cluster from "./_chunks/cluster.md";
  import Networking from "./_chunks/networking.md";
  import Registry from "./_chunks/registry.md";
  import Database from "./_chunks/database.md";
  import Storage from "./_chunks/storage.md";
  import Install from "./_chunks/install.md";
</script>

# Single-Cluster Reference Architecture for Production Purposes

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Intended for:   | Continous usage of Gitpod at a company-wide scale in a reliable way by leveraging popular cloud provider services such as S3 and RDS.                                                                                                                                                                                                                                                                                                                                                                                            |
| Limitations:    | - This is bound to a single cluster. Deploying in several regions requires setting up several Gitpod installations <br /> - Requires external dependencies (Object storage, registry, database) to be set up                                                                                                                                                                                                                                                                                                                     |
| Cost Estimates: | - [AWS\*](https://calculator.aws/#/estimate?id=258a343acea8193acd54ffabf1a61e203389439a): With the configuration in this estimate, you would be able to run 36 concurrent basic workspaces - assuming the same density as currently used in Gitpod Saas. Your mileage _will_ vary. <br /> \* Cost estimates do not include egress - however, we typically see egress cost to be an additional 15% on top of the estimates here. These estimates are just examples - the exact cost will depend on your set-up and usage profile. |

This guide describes a single-cluster reference architecture for Gitpod aimed at production environments: continuous deployments of Gitpod used in anger by your engineers. It consists of a Kubernetes cluster, cert-manager, external MySQL database, external OCI image registry, and external object storage. It includes instructions on how to set up this reference architecture on the officially supported cloud providers.

This reference architecture can be used as a blueprint for your Gitpod installation: Start with this reference architecture and adapt it to your needs. The reference architecture as described in this guide is what Gitpod supports, and is used to test against every self-hosted Gitpod release.

To use Gitpod, you also need a Git source code management system (SCM) like GitLab, GitHub, or Bitbucket. You will find the supported SCMs on the [required components guide](../required-components). Installing your own SCM is beyond the scope of this guide. However, you can simply use the cloud versions of GitLab, GitHub, or Bitbucket as well as the possible existing installation in your corporate network.

You can also create a Kubernetes cluster on your bare metal servers for smaller setups. See the [K3s guide](../cluster-set-up/on-k3s) for more information.

## Overview

<Overview />

## Cloud Provider Preparations

<Preparations />

## Kubernetes Cluster

<Cluster />

## Networking

<Networking />

## Object Storage

<Storage />

## OCI Image Registry

<Registry />

## Database

<Database />

## Install Gitpod

<Install />
