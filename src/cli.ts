#!/usr/bin/env node
import { create } from './create';
import { Command } from 'commander';

const program = new Command();

(async () => {
  program
    .name('npx @philippbaschke/cv')
    .description('CLI to create a ReactPDF CV from YAML configuration');

  program
    .command('create')
    .description('Create the PDF (run inside the data folder)')
    .argument('[output-file]', 'A path where the PDF should be saved', 'cv.pdf')
    .action(create);

  await program.parseAsync();
})();
