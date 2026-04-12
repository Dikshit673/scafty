import fs from 'fs-extra';
import path from 'path';
import type { Answers } from '../prompts.js';
import type { Manager } from '../utils/createManager.js';

export async function setupPrettier(
  projectDir: string,
  answers: Answers,
  deps: Manager,
  devDeps: Manager
) {
  devDeps.add('prettier');

  await fs.writeJSON(
    path.join(projectDir, '.prettierrc'),
    {
      singleQuote: true,
      semi: true,
      tabWidth: 2,
      useTabs: false,
      trailingComma: 'es5',
      printWidth: 80,
      bracketSpacing: true,
      bracketSameLine: false,
    },
    { spaces: 2 }
  );

  await fs.writeFile(
    path.join(projectDir, '.prettierignore'),
    `node_modules
dist
build
*.min.js

.next
out

*.config.ts
*.config.js
*.config.mjs
`
  );
}
