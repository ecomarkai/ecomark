# @ecomarkai/config

Safe configuration contracts and helpers.

## Responsibility

Describes which configuration keys exist, how each is read, and where each is allowed to travel.

## Boundary

Dependency-free, including of every other Ecomark package.

`loadConfig` returns a discriminated result rather than throwing, so this package needs no error
vocabulary and stays independent of `@ecomarkai/errors`. The composition root decides how a
startup failure is surfaced — typically by refusing to start. A caller cannot read values
without first handling the failure branch.

## This package contains no values

No secrets, no API keys, no tokens, no passwords, no private keys, no production credentials, no
`.env` file. Real values stay in the environment or an approved secret manager. Every value
appearing in tests is a placeholder.

The package never reads `process.env` itself. A `ConfigSource` record is passed in, which keeps
it usable in a browser bundle, in a worker and in tests without mutating shared process state.

## Server and browser boundary

Every entry declares `exposure: "server" | "public"`.

`public` values are inlined into a browser bundle, which makes them effectively world-readable.
`publicConfig` narrows a loaded configuration to those entries **in the type and at runtime**.
Either half alone would be insufficient: types do not reach the wire, and a runtime filter alone
would let a server key be read in browser code before anyone noticed.

`loadConfig` refuses to load a definition that marks a `secret` entry as `public`, so the
mistake fails at startup rather than at the first request that serializes the value into a page.

## No global configuration object

Each module owns its own definition. One platform-wide bag would make every consumer
transitively depend on every key, and a browser bundle would end up importing the shape of
server secrets.

## Secrets are never echoed

A configuration value is the most concentrated secret a process holds. A `ConfigProblem` carries
a **key and a reason only** — never the value — because a message that quotes it puts a database
password into a startup log, a crash report and an error tracker in one step. `describeConfig`
reports a secret as present or absent and redacts the value.

A `secret` entry must never carry a `defaultValue`: a silent fallback for a missing credential
turns a misconfigured deployment into a subtly wrong running system instead of a loud failure.

## Readers

`stringValue`, `integerValue`, `booleanValue`, `enumValue`, `urlValue`.

These are small and local rather than a shared validation abstraction. No runtime validation
technology is approved for this repository yet, and configuration needs only a handful of
conversions, so inventing a general validator to serve one caller would be the wrong trade. When
the validation ADR lands, these adopt it behind the same `ConfigReader` shape.

They reject ambiguous spellings (`1e3`, `0x10`, `yes`, `on`, empty) rather than guessing: a
feature flag that silently reads false is worse than a startup failure. `stringValue` does not
trim, because a credential may legitimately contain edge whitespace we have no business editing.

## Verification

`pnpm --filter @ecomarkai/config test`
