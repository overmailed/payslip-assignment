import { DateTime } from 'luxon';

export function formatDate(date: Date) {
  return DateTime.fromJSDate(date).toLocaleString(
    DateTime.DATE_FULL,
  );
}

export function formatDateShort(date: Date) {
  return DateTime.fromJSDate(date).toLocaleString(
    DateTime.DATE_SHORT,
  );
}
