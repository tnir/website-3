---
section: self-hosted/latest
title: Telemetry in Gitpod
---

<script context="module">
  export const prerender = true;
</script>

# Telemetry

A self-hosted installation of Gitpod also comes with a Kuberenetes CronJob that reports back telemetry data
that we use to improve the product. This is done by having a `installation-telemetry` CronJob
that is triggered every day, that fetches and sends the telemetry data.

This data is anonymoused, and contains nothing specific to instance/user. None of the data w.r.t
the repositories, code host, external integrations, etc is collected.
It only contains aggregate data on how a Gitpod instance is being used.

## Setting in Admin dashboard

This is enabled by default, and can be disabled by going into the `Settings` tab in the `Admin` dasbhoard,
and using the `Enable Service Ping` toggle.

The exact data that is sent is shown in the dashboard, for users to see for transparency.
This data is up-to-date, as it uses the same functionality that is used by the CronJob itself to fetch the data.

![Enable Service Ping in Admin Settings](../../../static/images/docs/self-hosted/telemetry-setting.png)
