const datePattern = /^(\d{4})-(0[1-9]|1[0-2])$/;

/**
 * Format a given date string as MMM yyyy (e.g. Dec 2021)
 *
 * @param date A date string in the format yyyy-MM (e.g. 2021-12)
 * @returns A date string in the format MMM yyyy (e.g. Dec 2021)
 */
const formatDate = (date: string): string => {
	const match = datePattern.exec(date);

	if (!match) {
		throw new Error(`Invalid date "${date}", expected the format yyyy-MM`);
	}

	const [, year, month] = match;
	// UTC on both ends, so the month can't shift with the local timezone
	return new Intl.DateTimeFormat("en-US", {
		month: "short",
		timeZone: "UTC",
		year: "numeric",
	}).format(Date.UTC(Number(year), Number(month) - 1));
};

export { formatDate };
