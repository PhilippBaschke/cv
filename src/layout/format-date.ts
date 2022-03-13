import { format, parse } from 'date-fns';

/**
 * Format a given date string as MMM yyyy (e.g. Dec 2021)
 *
 * @param date A date string in the format yyyy-MM (e.g. 2021-12)
 * @returns A date string in the format MMM yyyy (e.g. Dec 2021)
 */
const formatDate = (date: string): string =>
  format(parse(date, 'yyyy-MM', new Date()), 'MMM yyyy');

export { formatDate };
