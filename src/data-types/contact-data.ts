type ContactData = {
  /** Email address */
  email: string;
  /** Phone number (with international code) */
  phone: string;

  /** GitHub username */
  github?: string;
  /**
   * LinkedIn username
   * @see https://www.linkedin.com/public-profile/settings
   */
  linkedin?: string;
  /** Twitter username */
  twitter?: string;
  /** Personal website (without https://) */
  website?: string;
};

export type { ContactData };
