/**
 * @param {String} message
 * @returns {Promise<Number>}
 */
export async function promptNumber(message) {
  try {
    const result = await prompt(message);
    return Number(result);
  } catch (err) {
    throw err;
  }
}

/**
 * @param {String} message
 * @returns {Promise<String>}
 */
export async function promptString(message) {
  try {
    const result = await prompt(message);
    return String(result);
  } catch (err) {
    throw err;
  }
}

/**
 * @param {String} message
 * @returns {Promise<any>}
 */
async function prompt(message) {
  return new Promise((resolve, reject) => {
    process.stdin.resume();
    if (message) {
      process.stdout.write(`${message} `);
    }
    process.stdin.on("data", (data) => resolve(data.toString().trim()));
    process.stdin.on("error", (err) => reject(err));
  });
}

export function exitProcess() {
  console.log("\x1b[33m%s\x1b[0m", "Process exited.");
  process.exit();
}
