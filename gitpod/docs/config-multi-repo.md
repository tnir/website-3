---
section: multi-repo
title: Multi-Repo Setups
---

<script context="module">
  export const prerender = true;
</script>

# Multi Repository Setups

> Multi-Repo support is in BETA. If you experience issues, or have feedback, please [share in this issue](https://github.com/gitpod-io/gitpod/issues/8623).

You can configure your `.gitpod.yml` to span multiple repositories.
As a result, starting new workspaces from any issue, branch or other context URL from any of the participating repositories just works and will create a full dev environment with all the repositories cloned, properly checked out and prebuilt.

## Listing additional repositories

The `.gitpod.yml` supports a property `additionalRepositories` where you can list repositories that should be cloned in addition to the one the config file resides in.
The property supports regular URLs to the repositories and optionally allows for specifying where the repo should be cloned (`checkoutLocation`).

Example:

```yaml
additionalRepositories:
  - url: https://github.com/my-org/multi-repo-sub1
  - url: https://github.com/my-org/multi-repo-sub2
    checkoutLocation: multi-repo-sub2-custom # this is relative to /workspace and defaults to the simple repo name (i.e. multi-repo-sub2 in this case)
```

With this you will have the additional repository cloned by Gitpod in all the workspaces you start on this repository. This will also take the branch checkout logic of Gitpod into account across all repositories. That is if you open a workspace on an issue, a local branch is created on all repositories. Likewise if you open a workspace on a branch, Gitpod will check out the same-named branch in all repositories if they exist. If such a branch doesn't exist Gitpod checks out the default branch on that repository.

## Working from the additional repositories

The configuration above works well as long as you only start workspaces from the main repository containing the `.gitpod.yml`. If you want to enable prebuild triggers as well as opening context URLs on the additional repositories, you need to commit a small `.gitpod.yml` to those repositories, that will delegate to the main configuration.

```yaml
mainConfiguration: https://github.com/my-org/multi-repo-main
```

This tells Gitpod that the repository is part of a larger setup.

## Setup Prebuilds

With the configuration in place, the last thing to do is to create a project for each of the participarting repositories. This will install the webhook on them so that Gitpod receives the push events and can trigger prebuilds. All prebuilds will be lsited under the project containing the main configuration.
