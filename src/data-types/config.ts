type ColorConfig = {
  /** The primary color of the CV */
  primary: string;
};

type FontConfig = {
  /** The base font of the CV */
  base: string;
};

type Config = {
  /**  Color configuration for the CV */
  color: ColorConfig;

  /** Font configuration for the CV */
  font: FontConfig;
};

export type { Config };
