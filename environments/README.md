# Environments

- `local` — local composition and non-sensitive development defaults.
- `staging` — production-like integration and release validation.
- `production` — references to production composition; secrets remain in the approved secret manager.

Never commit production secrets, exported customer data, access tokens, or private keys.

