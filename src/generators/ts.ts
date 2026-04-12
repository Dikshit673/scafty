import fs from 'fs-extra';
import path from 'path';
import type { Answers } from '../prompts.js';
import type { Manager } from '../utils/createManager.js';

export async function setupTS(
  projectDir: string,
  answers: Answers,
  deps: Manager,
  devDeps: Manager
) {
  devDeps.add('typescript');
  devDeps.add('tsx');

  await fs.writeFile(
    path.join(projectDir, 'tsconfig.json'),
    `{
  "compilerOptions": {
    /* Language and Environment */
    "target": "ESNext",
    ${answers.srcDir ? `"rootDir": "src",` : ''}
    "outDir": "dist",
    "types": ["node"],
    
    /* Modules */
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "verbatimModuleSyntax": true,
    
    /* Interop */
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    /* Type Checking */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,

    /* Linting */
    "erasableSyntaxOnly": true,
    "noPropertyAccessFromIndexSignature": true,

    /* Performance */
    "skipLibCheck": true,
  },
  ${answers.srcDir ? `"include": ["src"],` : ''}
  "exclude": ["node_modules", "dist"]
}`
  );
}
