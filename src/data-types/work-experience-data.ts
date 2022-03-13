import type { Location } from './location';

type Company = {
  /** Company name */
  name: string;
  /** Company location (where you worked) */
  location?: Location;
  /** Company website (without https://) */
  website?: string;
};

type Product = {
  /**  Product description */
  description: string;
  /**  Product website (without https://) */
  website?: string;
};

type WorkExperienceData = Array<{
  /** Job title */
  jobTitle: string;

  /** Information about the Company */
  company: Company;

  /** When did you start the job? (YYYY-MM) */
  startDate: string;
  /** Until when did you work at this job? (YYYY-MM) */
  endDate?: string;

  /** Information about the Product */
  product?: Product;

  /** Job achievements */
  achievements: string[];
}>;

export type { WorkExperienceData };
