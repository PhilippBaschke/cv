# CV Data

This repository was created with [@philippbaschke/cv](https://github.com/PhilippBaschke/cv).

## Table of Contents

- [Usage](#usage)
- [How to use a different font](#how-to-use-a-different-font)

## Usage

1. Add your CV data in the `.yml` files in the [data](data) folder
1. _(optional)_ Add a font from Google Fonts in the [fonts](fonts) folder
1. _(optional)_ Edit the configuration in [config.yml](config.yml)
1. Create the PDF by running `npx @philippbaschke/cv create`

## How to use a different font

1. Find a [Google font](https://fonts.google.com/) that you like (e.g. [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro))
1. Download the font archive by clicking the _Download family_ button
1. Extract the downloaded archive (e.g. `Source_Sans_Pro.zip`)
1. Copy the font family folder into the [fonts](fonts) folder (e.g. `fonts/Source_Sans_Pro`)
1. Update the `font.base` configuration value:

   ```yml
   # config.yml
   font:
     base: Source Sans Pro
   ```

1. _(optional)_ Remove unused font files. The CV layout only uses:
   - `<FontName>-Bold.ttf`
   - `<FontName>-Italic.ttf`
   - `<FontName>-Regular.ttf`
