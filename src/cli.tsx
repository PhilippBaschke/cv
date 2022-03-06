#!/usr/bin/env node

import path from 'node:path';
import process from 'node:process';
import { Cv } from './layout/cv';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';

(async () => {
  const [action, ...args] = process.argv.slice(2);

  if (action !== 'create') {
    console.error(`Error: The action "${action}" is not supported`);

    return;
  }

  const filePath = path.resolve(args[0] ?? 'cv.pdf');

  console.log(`Saving CV in ${filePath}`);
  await renderToFile(<Cv />, filePath);
})();
