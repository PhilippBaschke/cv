#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { Cv } from './layout/cv';
import type { HeaderData } from './data/header';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import yaml from 'js-yaml';

(async () => {
  const [action, ...args] = process.argv.slice(2);

  if (action !== 'create') {
    console.error(`Error: The action "${action}" is not supported`);

    return;
  }

  const filePath = path.resolve(args[0] ?? 'cv.pdf');

  try {
    const header = yaml.load(
      fs.readFileSync(path.resolve(__dirname, 'data', 'header.yml'), 'utf8'),
    ) as HeaderData;

    console.log(`Saving CV in ${filePath}`);
    await renderToFile(<Cv header={header} />, filePath);
  } catch (error: unknown) {
    console.error(error);
  }
})();
