export async function isInstalled(program: string, args = ["--help"]) {
  try {
    await Deno.spawn(program, { args, stdout: "null", stderr: "null" });

    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }

    throw error;
  }
}

export function isInstalledSync(program: string, args = ["--help"]) {
  try {
    Deno.spawnSync(program, { args, stdout: "null", stderr: "null" });

    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }

    throw error;
  }
}
