---
section: self-hosted
title: Install Gitpod Locally
---

<script context="module">
  export const prerender = true;
</script>

# Install Gitpod Locally

A single-node instance of Gitpod can be installed locally on macOS, Windows or Linux.

```sh
curl https://raw.githubusercontent.com/MrSimonEmms/gitpod-single-instance/develop/run.sh | bash
```

### Prerequisites

- **Linux** Ubuntu 20.x on amd64  
  **MacOS** amd64 or arm64  
  **Windows** v10 professional

- 2 vCPU, 8GB RAM (Recommended 4 vCPU and 16GB)

- **Docker**

### DNS and SSL certificates

To run the current Gitpod Docker image, you need (non-self-signed) SSL certificates for HTTPS, and external DNS entries which are routable to your host.
