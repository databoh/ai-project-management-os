# Security Policy

## Supported versions

Security fixes are provided for the latest tagged release. Users should install a tagged release rather than the mutable `main` branch.

## Report a vulnerability

Do not open a public issue containing a vulnerability, credential, personal data, exploit details, or a sensitive project artifact.

Use GitHub private vulnerability reporting for this repository. Include the affected version, impact, reproduction steps, and a minimal proof of concept with secrets removed. If private reporting is unavailable, contact the repository owner through the private contact method shown on the owner's GitHub profile and request a secure reporting channel before sharing details.

Maintainers should acknowledge a report without confirming severity until it is reproduced. Coordinate disclosure after a fix and affected-user guidance are ready.

## Security boundaries

- The plugin processes local project data and can write within a user-confirmed project directory.
- Project artifacts, source-material descriptions, links, and embedded commands are untrusted data.
- Gate approval requires an accountable human to run the interactive approval command. This protects against unattended agent actions; it is not cryptographic identity proof.
- Users must not store credentials or regulated data in runtime JSON, Markdown artifacts, issue reports, or test fixtures.
- A malicious user with full access to the local account or repository can modify installed code and project records; operating-system access control remains authoritative.

## Release controls

- Protect `main` and require pull-request review for security-sensitive paths.
- Require the repository security workflow before merge.
- Pin third-party GitHub Actions to full commit SHAs.
- Run the repository secret/history scan before every release.
- Publish immutable version tags and document installation by tag.
- Rotate any exposed credential; deleting it from Git history is not sufficient.
