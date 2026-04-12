import fs from 'fs-extra';
import path from 'path';
import type { Answers } from '../prompts.js';

export async function createProject(
  projectDir: string,
  name: string,
  answers: Answers
) {
  await fs.mkdirp(projectDir);

  await fs.writeJSON(
    path.join(projectDir, 'package.json'),
    {
      name,
      version: '1.0.0',
      type: 'module',
      private: true,
      scripts: {
        dev: answers.typescript ? 'tsx src/index.ts' : 'node src/index.js',
      },
    },
    { spaces: 2 }
  );
}
