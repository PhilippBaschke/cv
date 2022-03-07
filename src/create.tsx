import fs from 'node:fs';
import path from 'node:path';
import { Cv } from './layout/cv';
import type { HeaderData } from './data/header';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import yaml from 'js-yaml';

const create = async (outputFile: string) => {
  const filePath = path.resolve(outputFile);
  const header = yaml.load(
    fs.readFileSync(path.resolve(__dirname, 'data', 'header.yml'), 'utf8'),
  ) as HeaderData;

  console.log(`Saving CV in ${filePath}`);
  await renderToFile(<Cv header={header} />, filePath);
};

export { create };
