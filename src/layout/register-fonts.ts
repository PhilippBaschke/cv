import path from 'node:path';
import { Font } from '@react-pdf/renderer';

type Style = 'Bold' | 'Italic' | 'Regular';

/**
 * Get the src for a given project path, family and style combination
 *
 * @example
 * // Returns 'path/fonts/Font_Family/FontFamily-Regular.ttf'
 * getFontSrc('path', 'Font Family')('Regular');
 */
const getFontSrc =
  (projectPath: string, family: string) =>
  (style: Style): string => {
    return path.resolve(
      projectPath,
      'fonts',
      // The folder names of Google Fonts are Snake_Case
      family.split(' ').join('_'),
      // The file names of Google Fonts are PascalCase
      `${family.split(' ').join('')}-${style}.ttf`,
    );
  };

/**
 * Register all font families
 */
const registerFonts = (projectPath: string, fontFamilies: string[]): void => {
  for (const family of fontFamilies) {
    const getFamilyFontSrc = getFontSrc(projectPath, family);

    Font.register({
      family,
      fonts: [
        { src: getFamilyFontSrc('Regular') },
        { src: getFamilyFontSrc('Bold'), fontWeight: 700 },
        { src: getFamilyFontSrc('Italic'), fontStyle: 'italic' },
      ],
    });
  }
};

export { registerFonts };
