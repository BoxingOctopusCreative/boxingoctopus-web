'use client';

import { useEffect, useRef } from 'react';
import { set, type StringInputProps } from 'sanity';

/** Legacy `monthYear` object shape from an earlier schema. */
function legacyObjectToYm(value: unknown): string | null {
  if (!value || typeof value !== 'object') return null;
  const o = value as Record<string, unknown>;
  const month = o.month;
  const year = o.year;
  if (typeof month !== 'number' || typeof year !== 'number') return null;
  return `${String(year).padStart(4, '0')}-${String(month).padStart(2, '0')}`;
}

/**
 * String field for YYYY-MM. Normalizes legacy object values so Studio does not
 * show `[object Object]` and patches the document to a string on load.
 */
export function MonthYearStringInput(props: StringInputProps) {
  const { value, onChange, renderDefault } = props;
  const patchedRef = useRef(false);

  const displayValue =
    typeof value === 'string' ? value : (legacyObjectToYm(value) ?? '');

  useEffect(() => {
    if (patchedRef.current) return;
    const ym = legacyObjectToYm(value);
    if (ym !== null) {
      patchedRef.current = true;
      onChange(set(ym));
    }
  }, [value, onChange]);

  return renderDefault({
    ...props,
    value: displayValue,
  });
}
