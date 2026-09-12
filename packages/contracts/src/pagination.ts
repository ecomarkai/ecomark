/** Deterministic ordering direction for a cursor-paginated list. */
export type SortDirection = "asc" | "desc";

/** Opaque pagination cursor. Clients must treat the value as meaningless. */
export type Cursor = string;

/**
 * Bounded cursor pagination request.
 *
 * Offset pagination is intentionally absent: it is neither stable under concurrent writes nor
 * cheap at scale. `limit` is always explicit so a transport boundary can enforce a maximum
 * rather than relying on an implicit default buried in a query builder.
 */
export type CursorPageRequest = {
  readonly limit: number;
  readonly cursor?: Cursor;
  readonly direction?: SortDirection;
};

export type PageInfo = {
  /** Absent when the current page is the last one. */
  readonly nextCursor?: Cursor;
  readonly hasMore: boolean;
};

export type CursorPage<TItem> = {
  readonly items: readonly TItem[];
  readonly pageInfo: PageInfo;
};
