import { execSync } from "node:child_process";
import path from "node:path";
import { program } from "commander";
import { copySync, ensureDirSync, existsSync } from "fs-extra";

const init = (pathArg: string) => {
	const projectPath = path.resolve(pathArg);

	if (existsSync(projectPath)) {
		program.error(`The path ${projectPath} already exists`);
	}

	console.log(`Initializing CV data project in ${projectPath}`);
	ensureDirSync(projectPath);
	execSync(`git init --initial-branch main ${projectPath}`);
	copySync(path.resolve(__dirname, "init-template"), projectPath);
	execSync(`git -C ${projectPath} add .`);
	execSync(`git -C ${projectPath} commit -m "Initialize CV data project"`);
};

export { init };
