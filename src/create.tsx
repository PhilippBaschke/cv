import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import { Cv } from './layout/cv';
import type { HeaderData } from './data-types/header-data';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import yaml from 'js-yaml';

type Options = {
  dataProject?: string;
};

const create = async (outputFile: string, { dataProject }: Options) => {
  const filePath = path.resolve(outputFile);
  const projectPath = path.resolve(dataProject ?? cwd());

  const header = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'header.yml'), 'utf8'),
  ) as HeaderData;

  console.log(`Saving CV in ${filePath}`);
  await renderToFile(<Cv header={header} />, filePath);
};

export { create };
