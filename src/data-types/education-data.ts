import type { Location } from './location';

type School = {
  /** School name */
  name: string;
  /** School location */
  location?: Location;
  /** School website (without https://) */
  website?: string;
};

type InformationSection = {
  /** The title of the information section */
  title: string;
  /** The content of the information section */
  content: string[];
};

type EducationData = Array<{
  /** Degree */
  degree: string;

  /** Information about the school */
  school: School;

  /** When did you start your education? (YYYY-MM) */
  startDate: string;
  /** When did you finish your education? (YYYY-MM) */
  endDate?: string;

  /** Information about your education */
  information?: InformationSection[];
}>;

export type { EducationData };
