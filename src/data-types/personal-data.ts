import type { Location } from './location';

type PersonalData = {
  /** Full name */
  name: string;

  /** Current location */
  location?: Location;

  /** Job title */
  jobTitle?: string;
  /** A summary of the CV (tailored to the job) */
  summary?: string;
};

export type { PersonalData };
