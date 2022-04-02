import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';
import { ConfigProvider } from './layout/config';
import { Cv } from './layout/cv';
import { registerFonts } from './layout/register-fonts';
import type { Config } from './data-types/config';
import type { ContactData } from './data-types/contact-data';
import type { EducationData } from './data-types/education-data';
import type { PersonalData } from './data-types/personal-data';
import type { SkillsData } from './data-types/skills-data';
import type { WorkExperienceData } from './data-types/work-experience-data';
import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import yaml from 'js-yaml';

type Options = {
  dataProject?: string;
};

const create = async (outputFile: string, { dataProject }: Options) => {
  const filePath = path.resolve(outputFile);
  const projectPath = path.resolve(dataProject ?? cwd());
  const imagePath = path.join(projectPath, 'data', 'image.png');

  const config = yaml.load(
    fs.readFileSync(path.join(projectPath, 'config.yml'), 'utf8'),
  ) as Config;

  const contact = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'contact.yml'), 'utf8'),
  ) as ContactData;

  const education = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'education.yml'), 'utf8'),
  ) as EducationData;

  const personal = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'personal.yml'), 'utf8'),
  ) as PersonalData;

  const skills = yaml.load(
    fs.readFileSync(path.join(projectPath, 'data', 'skills.yml'), 'utf8'),
  ) as SkillsData;

  const workExperience = yaml.load(
    fs.readFileSync(
      path.join(projectPath, 'data', 'work-experience.yml'),
      'utf8',
    ),
  ) as WorkExperienceData;

  registerFonts(projectPath, [config.font.base]);

  console.log(`Saving CV in ${filePath}`);
  await renderToFile(
    <ConfigProvider value={config}>
      <Cv
        contact={contact}
        education={education}
        image={fs.existsSync(imagePath) ? imagePath : undefined}
        personal={personal}
        skills={skills}
        workExperience={workExperience}
      />
    </ConfigProvider>,
    filePath,
  );
};

export { create };
