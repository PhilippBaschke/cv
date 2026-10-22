import { execFileSync } from "node:child_process";

// Config set via `git -c` or GIT_CONFIG_COUNT/KEY_n/VALUE_n, e.g. a CI identity
const callerConfigEnvVars = ["GIT_CONFIG_PARAMETERS", "GIT_CONFIG_COUNT"];

let localEnvVars: string[] | undefined;

// Drops env vars that point git at a repository (GIT_DIR, GIT_INDEX_FILE, ...).
// Set when running under git, e.g. in a hook, they override the repository a
// path argument names. The caller's config is kept
const gitEnv = () => {
	// The names are fixed per git binary, the values can change between calls
	localEnvVars ??= execFileSync("git", ["rev-parse", "--local-env-vars"], {
		encoding: "utf8",
	})
		.trim()
		.split("\n");
	const env = { ...process.env };
	for (const name of localEnvVars) {
		if (!callerConfigEnvVars.includes(name)) delete env[name];
	}
	return env;
};

const git = (...args: string[]) =>
	execFileSync("git", args, { encoding: "utf8", env: gitEnv() });

export { git };
