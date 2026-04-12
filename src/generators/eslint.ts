import fs from 'fs-extra';
import path from 'path';
import type { Answers } from '../prompts.js';
import type { Manager } from '../utils/createManager.js';

export async function setupESLint(
  projectDir: string,
  answers: Answers,
  deps: Manager,
  devDeps: Manager
) {
  devDeps.add('eslint');
  devDeps.add('globals');

  let config = `import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";`;

  // TS support
  if (answers.typescript) {
    devDeps.add('typescript-eslint');
    config += `
import tseslint from "typescript-eslint";`;
  }

  // Import sort plugin
  if (answers.importSort) {
    devDeps.add('eslint-plugin-simple-import-sort');
    config += `
import simpleImportSort from "eslint-plugin-simple-import-sort";`;
  }

  config += `

export default defineConfig([
  js.configs.recommended,`;

  // TS config
  if (answers.typescript) {
    config += `
  ...tseslint.configs.recommended,`;
  }

  config += `
  {
    files: ["**/*.{js,ts}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {`;

  if (answers.importSort) {
    config += `
      "simple-import-sort": simpleImportSort,`;
  }

  config += `
    },
    rules: {`;

  // TS vs JS rules
  if (answers.typescript) {
    config += `
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",`;
  } else {
    config += `
      "no-unused-vars": "warn",`;
  }

  // import sort rules
  if (answers.importSort) {
    config += `

      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",`;
  }

  config += `
    }
  }
]);`;

  await fs.writeFile(path.join(projectDir, 'eslint.config.js'), config);
}
