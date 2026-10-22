import { spawn, spawnSync } from "node:child_process";

const isNotFound = (error: unknown) =>
  (error as NodeJS.ErrnoException | undefined)?.code === "ENOENT";

/**
 * Check whether a program is installed, by trying to run it.
 *
 * @param program - The command to look for.
 * @param args - Arguments used for the probe run, defaults to `--help`.
 *
 * @example
 * ```javascript
 * import { isInstalled } from "@ultirequiem/is-installed";
 *
 * await isInstalled("ls"); //=> true
 * await isInstalled("non-existing-command"); //=> false
 * ```
 */
export function isInstalled(
  program: string,
  args: string[] = ["--help"],
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const child = spawn(program, args, { stdio: "ignore" });

    child.once("error", (error) => {
      if (isNotFound(error)) {
        resolve(false);
      } else {
        reject(error);
      }
    });

    child.once("close", () => {
      resolve(true);
    });
  });
}

/**
 * Synchronous version of {@link isInstalled}.
 *
 * @param program - The command to look for.
 * @param args - Arguments used for the probe run, defaults to `--help`.
 */
export function isInstalledSync(
  program: string,
  args: string[] = ["--help"],
): boolean {
  const { error } = spawnSync(program, args, { stdio: "ignore" });

  if (error && !isNotFound(error)) {
    throw error;
  }

  return !error;
}
