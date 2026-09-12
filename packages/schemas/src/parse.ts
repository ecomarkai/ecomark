import { z } from "zod";

/**
 * A single reason a value was rejected.
 *
 * `path` is a dotted location such as `tenant.storeId` or `items.0.id`. `message` is
 * developer-facing English; product copy is derived by the UI.
 *
 * An issue never carries the rejected value. Input can itself be a secret — a token pasted into
 * the wrong field, a customer email — and validation output is routinely logged.
 */
export type SchemaIssue = {
  readonly path: string;
  readonly message: string;
};

export type ParseResult<T> =
  | { readonly ok: true; readonly value: T }
  | { readonly ok: false; readonly issues: readonly SchemaIssue[] };

/**
 * Parses a value and returns a result instead of throwing.
 *
 * This is the package's exit seam. Callers never catch `ZodError` and never import `zod`, so
 * replacing the validation library is a change to this package's internals rather than to every
 * call site — which is the condition ADR-0001 relies on for its exit strategy.
 */
export function parse<TOutput, TInput>(
  schema: z.ZodType<TOutput, TInput>,
  input: unknown,
): ParseResult<TOutput> {
  const result = schema.safeParse(input);
  if (result.success) {
    return { ok: true, value: result.data };
  }
  return { ok: false, issues: toIssues(result.error) };
}

/**
 * Flattens a validation error into a uniform issue list.
 *
 * An unrecognized-key error is reported by Zod against the containing object, with the offending
 * names inside the message and an empty path. That is unusable to a caller trying to highlight a
 * field, so it is expanded into one issue per key with the key as the path — matching how every
 * other issue is reported.
 */
function toIssues(error: z.ZodError): readonly SchemaIssue[] {
  const issues: SchemaIssue[] = [];
  for (const issue of error.issues) {
    const basePath = issue.path.map(String).join(".");
    if (issue.code === "unrecognized_keys") {
      for (const key of issue.keys) {
        issues.push({
          path: basePath === "" ? key : `${basePath}.${key}`,
          message: "Unrecognized key is not accepted.",
        });
      }
      continue;
    }
    issues.push({ path: basePath, message: issue.message });
  }
  return issues;
}

/**
 * Parses a value, returning `undefined` on failure.
 *
 * For callers that only need the happy path and have their own handling for absence.
 */
export function parseOrUndefined<TOutput, TInput>(
  schema: z.ZodType<TOutput, TInput>,
  input: unknown,
): TOutput | undefined {
  const result = schema.safeParse(input);
  return result.success ? result.data : undefined;
}
