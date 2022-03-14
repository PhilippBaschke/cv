import path from 'node:path';
import { font } from './tokens';
import { Font } from '@react-pdf/renderer';

type Family = typeof font[keyof typeof font];
type Style = 'Bold' | 'Italic' | 'Regular';

/**
 * Get the src for a given family and style combination
 *
 * @example
 * // Returns '__dirname/../fonts/Font_Family/FontFamily-Regular.ttf'
 * getFontSrc('Font Family', 'Regular');
 */
const getFontSrc = (family: Family, style: Style): string => {
  return path.resolve(
    __dirname,
    '..',
    'fonts',
    // The folder names of Google Fonts are Snake_Case
    family.split(' ').join('_'),
    // The file names of Google Fonts are PascalCase
    `${family.split(' ').join('')}-${style}.ttf`,
  );
};

/**
 * Register all fonts that are defined in tokens.font
 */
const registerFonts = (): void => {
  for (const family of Object.values(font)) {
    Font.register({
      family,
      fonts: [
        { src: getFontSrc(family, 'Regular') },
        { src: getFontSrc(family, 'Bold'), fontWeight: 700 },
        { src: getFontSrc(family, 'Italic'), fontStyle: 'italic' },
      ],
    });
  }
};

export { registerFonts };
