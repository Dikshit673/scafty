import inquirer, { type QuestionCollection } from 'inquirer';

export const packageManagerList = ['pnpm', 'yarn', 'npm'] as const;
export type PackageManagerList = (typeof packageManagerList)[number];

const questions = [
  {
    name: 'name',
    type: 'input',
    message: 'Project name:',
    default: 'backend',
  },
  {
    name: 'typescript',
    type: 'confirm',
    message: 'Use TypeScript?',
    default: true,
  },
  {
    name: 'eslint',
    type: 'confirm',
    message: 'Add ESLint?',
    default: true,
  },
  {
    name: 'importSort',
    type: 'confirm',
    message: 'Add import sorting?',
    default: true,
  },
  {
    name: 'prettier',
    type: 'confirm',
    message: 'Add Prettier?',
    default: true,
  },
  {
    name: 'srcDir',
    type: 'confirm',
    message: 'Create src folder?',
    default: true,
  },
  {
    name: 'packageManager',
    type: 'list',
    message: 'Select package manager:',
    choices: packageManagerList,
  },
] as const satisfies QuestionCollection;

export type QuestionName = (typeof questions)[number]['name'];

export type Answers = {
  name: string;
  typescript: boolean;
  eslint: boolean;
  importSort: boolean;
  prettier: boolean;
  srcDir: boolean;
  packageManager: PackageManagerList;
};

export async function askQuestions(): Promise<Answers> {
  return inquirer.prompt(questions) as Promise<Answers>;
}
