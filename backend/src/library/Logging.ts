import chalk from "chalk";

export default class Logging {
  public static log = (args: unknown ) => this.info(args);

  public static info = (args: unknown) =>
    console.log(
      chalk.blue(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === "string" ? chalk.blueBright(args) : args
    );

  public static warn = (args: unknown) =>
    console.log(
      chalk.yellow(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === "string" ? chalk.yellowBright(args) : args
    );

  public static error = (args: unknown) =>
    console.log(
      chalk.red(`[${new Date().toLocaleString()}] [INFO]`),
      typeof args === "string" ? chalk.redBright(args) : args
    );
}
