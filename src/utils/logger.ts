import chalk from 'chalk';

export const logInfo = (msg: unknown) => console.log(chalk.cyan(msg));
export const logSuccess = (msg: unknown) => console.log(chalk.green(msg));
export const logError = (msg: unknown) => console.log(chalk.red(msg));
export const logWarning = (msg: unknown) => console.log(chalk.yellow(msg));
