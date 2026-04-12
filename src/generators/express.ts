import fs from 'fs-extra';
import path from 'path';
import type { Answers } from '../prompts.js';
import type { Manager } from '../utils/createManager.js';

export async function createExpressApp(
  projectDir: string,
  answers: Answers,
  deps: Manager,
  devDeps: Manager
) {
  const srcPath = answers.srcDir ? path.join(projectDir, 'src') : projectDir;

  await fs.mkdirp(srcPath);

  const ext = answers.typescript ? 'ts' : 'js';

  deps.add('express');

  devDeps.add('@types/node');
  devDeps.add('@types/express');

  await fs.writeFile(
    path.join(srcPath, `index.${ext}`),
    `import express from 'express';

const app = express();
const PORT = process.env["PORT"] || 3586;

app.use(express.json());

app.get('/', (_, res) => {
  res.json({ message: 'API running 🚀' });
});

app.listen(PORT, () => {
  console.log(\`Server running at http://localhost:\${PORT}\`);
});
`
  );
}
