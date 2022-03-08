import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import { Cv } from './layout/cv';
import type { ContactData } from './data-types/contact-data';
import type { PersonalData } from './data-types/personal-data';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import yaml from 'js-yaml';

type Options = {
  dataProject?: string;
};

const create = async (outputFile: string, { dataProject }: Options) => {
  const filePath = path.resolve(outputFile);
  const projectPath = path.resolve(dataProject ?? cwd());

  const contact = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'contact.yml'), 'utf8'),
  ) as ContactData;

  const personal = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'personal.yml'), 'utf8'),
  ) as PersonalData;

  console.log(`Saving CV in ${filePath}`);
  await renderToFile(<Cv contact={contact} personal={personal} />, filePath);
};

export { create };
