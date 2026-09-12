/**
 * Generic tenant reference carried as event metadata.
 *
 * Deliberately NOT a tenancy model. There is no organization, workspace or store entity here,
 * no membership, no hierarchy and no resolution logic, because tenancy is not implemented yet
 * and an event envelope is the wrong place to decide its shape.
 *
 * `scope` names the kind of boundary and `id` identifies it. When the tenancy model lands, an
 * organization-scoped event is `{ scope: "organization", id: "org_1" }` and nothing about the
 * envelope has to change. A richer scope can be added later as an additional field without
 * breaking consumers that only read these two.
 *
 * Carrying this never grants access. A consumer must still authorize before acting on an
 * event, exactly as it would for an inbound request.
 */
export type TenantRef = {
  readonly scope: string;
  readonly id: string;
};

export function isTenantRef(value: unknown): value is TenantRef {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate["scope"] === "string" &&
    candidate["scope"].length > 0 &&
    typeof candidate["id"] === "string" &&
    candidate["id"].length > 0
  );
}
