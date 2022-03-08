type PersonalData = {
  /** Full name */
  name: string;

  /** Current location */
  location?: {
    city: string;
    country: string;
  };

  /** Job title */
  jobTitle?: string;
  /** A summary of the CV (tailored to the job) */
  summary?: string;
};

export type { PersonalData };
