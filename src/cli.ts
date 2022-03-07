#!/usr/bin/env node
import { create } from './create';
import { init } from './init';
import { Command } from 'commander';

const program = new Command();

(async () => {
  program
    .name('npx @philippbaschke/cv')
    .description('CLI to create a ReactPDF CV from YAML configuration');

  program
    .command('init')
    .description('Initialize a git project for the CV data')
    .argument(
      '[path]',
      'A path where the CV data project should be initialized',
      'cv-data',
    )
    .action(init);

  program
    .command('create')
    .description('Create the PDF (run inside the data folder)')
    .argument('[output-file]', 'A path where the PDF should be saved', 'cv.pdf')
    .option(
      '-d, --data-project <path>',
      'A path to a CV data project (default: current working directory)',
    )
    .action(create);

  await program.parseAsync();
})();
