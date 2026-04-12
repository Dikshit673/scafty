import { type Answers, type PackageManagerList } from './prompts.js';
import { Manager } from './utils/createManager.js';
import { run } from './utils/run.js';

const registry: Record<PackageManagerList, string> = {
  pnpm: 'pnpm add',
  yarn: 'yarn add',
  npm: 'npm i',
};

export async function installDeps(
  projectDir: string,
  answers: Answers,
  deps: Manager,
  devDeps: Manager
) {
  const cmd = registry[answers['packageManager']];

  if (!cmd)
    throw new Error(`Unknown package manager: ${answers['packageManager']}`);

  const depsManager = deps.get();
  const devDepsManager = devDeps.get();

  if (depsManager.length) run(`${cmd} ${depsManager.join(' ')}`, projectDir);
  if (devDepsManager.length)
    run(`${cmd} -D ${devDepsManager.join(' ')}`, projectDir);
}
