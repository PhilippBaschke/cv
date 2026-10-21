import { afterEach, describe, expect, it, vi } from "vitest";
import { formatDate } from "./format-date.js";

describe("formatDate", () => {
	afterEach(() => {
		vi.unstubAllEnvs();
	});

	it("should format yyyy-MM as MMM yyyy", () => {
		expect(formatDate("2021-12")).toBe("Dec 2021");
	});

	it("should not shift the month in timezones behind UTC", () => {
		vi.stubEnv("TZ", "America/Los_Angeles");
		expect(formatDate("2021-01")).toBe("Jan 2021");
	});

	it.each(["2021-13", "2021-00", "2021-1", "Dec 2021", ""])(
		"should reject %j with a descriptive error",
		(input) => {
			expect(() => formatDate(input)).toThrow(/yyyy-MM/);
		},
	);
});
