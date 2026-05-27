# Security Policy

The `vigil-site` repository is the marketing / brand site for Vigil — it does not handle user data or run user code. The product itself lives at https://github.com/rajan-cforge/ai-runtime-monitor-enterprise; that repo's [SECURITY.md](https://github.com/rajan-cforge/ai-runtime-monitor-enterprise/blob/main/SECURITY.md) is the canonical source of disclosure policy for the product.

## Reporting site issues

For vulnerabilities specific to this site (e.g. content-security-policy regression, supply-chain in npm deps, exposed environment variable in a build artifact), please email:

**security@gocloudforge.com**

Target initial response: 48 hours.

## Scope

- Static Next.js site built to `out/`
- Hosted on Cloudflare Pages at `vigil.gocloudforge.com`
- No backend, no user data, no authentication

## Out of scope

- Product vulnerabilities — please use the product repo's SECURITY.md.
- Findings that require write access to this repository.

---

Copyright 2026 GoCloudForge, Inc.
