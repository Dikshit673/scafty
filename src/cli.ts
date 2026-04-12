import path from 'path';
import fs from 'fs-extra';

import { askQuestions } from './prompts.js';
import { createProject } from './generators/project.js';
import { setupTS } from './generators/ts.js';
import { setupESLint } from './generators/eslint.js';
import { setupPrettier } from './generators/prettier.js';
import { createExpressApp } from './generators/express.js';
import { installDeps } from './install.js';
import { logSuccess, logError, logInfo } from './utils/logger.js';
import { createManager } from './utils/createManager.js';

const rootDir = process.cwd();

async function main() {
  try {
    logInfo('\n🚀 Backend Project Setup\n');

    const answers = await askQuestions();

    const projectName =
      answers.name?.trim().replace(/\s+/g, '-').toLowerCase() || 'backend';

    const projectDir = path.join(rootDir, projectName);

    if (await fs.pathExists(projectDir)) {
      logError('Folder already exists. Aborting.');
      process.exit(1);
    }

    await createProject(projectDir, projectName, answers);

    const depsKeyName = 'deps';
    const devDepsKeyName = 'devDeps';

    const depsManager = createManager(depsKeyName);
    const devDepsManager = createManager(devDepsKeyName);

    if (answers.typescript) {
      await setupTS(projectDir, answers, depsManager, devDepsManager);
    }

    if (answers.eslint) {
      await setupESLint(projectDir, answers, depsManager, devDepsManager);
    }

    if (answers.prettier) {
      await setupPrettier(projectDir, answers, depsManager, devDepsManager);
    }

    await createExpressApp(projectDir, answers, depsManager, devDepsManager);

    await installDeps(projectDir, answers, depsManager, devDepsManager);

    logSuccess(`\n✅ Project created.\n`);
  } catch (err) {
    logError((err as { message: string }).message);
  }
}

main();
