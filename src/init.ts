import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { program } from "commander";
import { git } from "./git.js";

const init = (pathArg: string) => {
	const projectPath = path.resolve(pathArg);

	if (existsSync(projectPath)) {
		program.error(`The path ${projectPath} already exists`);
	}

	console.log(`Initializing CV data project in ${projectPath}`);
	mkdirSync(projectPath, { recursive: true });
	git("init", "--initial-branch", "main", projectPath);
	cpSync(path.resolve(import.meta.dirname, "init-template"), projectPath, {
		recursive: true,
	});
	git("-C", projectPath, "add", ".");
	git("-C", projectPath, "commit", "-m", "Initialize CV data project");
};

export { init };
