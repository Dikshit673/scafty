import { execSync } from 'child_process';

export function run(cmd: string, cwd: string) {
  execSync(cmd, { stdio: 'inherit', cwd });
}
