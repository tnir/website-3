# 1. multicloud support

Date: 2022-03-11

## Status

2022-03-11 in discussion

## Context

Netlify had multiple outages in the past, which resulted in defacto downtime for our website, and caused non-working contact-forms.

## Decision

Do we make the Repo deployable to multiple cloud-proivders (in our case Vercel & Netlify)

## Consequences

In order to achieve this goal we would need to take several steps, described in the following

1. We need to get rid of Netlify Specifics like the `Functions` and the `_redirects`. A solution for this would be to
2. We need to find a way to generate the `_redirects`. As Vercel uses a `.json`-File for this config we can parse this and generate the `_redirects` based on the `vercel.json`
3. We need to exchange the Sveltekit-Adapter. Currently we use `adapter-netlify`, which needs to be changed to `adapter-auto`. This Adapter should recognize the environment the app gets deployed to and select the correct Adapter by itself.
4. When having two instances of the Repo running at two providers we can simply switch between those by changing the DNS to either one or the other instance.
5. What we need to consider is, that when having two instances deployed at Vercel and Netlify we might run into SEO issues, becaues we have duplicate content out there in the web.
