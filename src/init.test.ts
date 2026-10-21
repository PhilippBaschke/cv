import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { init } from "./init.js";

const committedFiles = (projectPath: string) =>
	execFileSync(
		"git",
		["-C", projectPath, "ls-tree", "-r", "--name-only", "HEAD"],
		{ encoding: "utf8" },
	);

describe("init", () => {
	const originalCwd = process.cwd();
	let tempDir: string;

	beforeEach(() => {
		tempDir = mkdtempSync(path.join(tmpdir(), "cv-init-"));
		// Anything a regression runs in a shell lands here and is cleaned up
		process.chdir(tempDir);

		// Isolate git from the user's config (e.g. commit signing) and provide
		// an identity, which CI runners don't have
		const emptyGitConfig = path.join(tempDir, "gitconfig");
		writeFileSync(emptyGitConfig, "");
		vi.stubEnv("GIT_CONFIG_GLOBAL", emptyGitConfig);
		vi.stubEnv("GIT_CONFIG_NOSYSTEM", "1");
		vi.stubEnv("GIT_AUTHOR_NAME", "Test");
		vi.stubEnv("GIT_AUTHOR_EMAIL", "test@example.com");
		vi.stubEnv("GIT_COMMITTER_NAME", "Test");
		vi.stubEnv("GIT_COMMITTER_EMAIL", "test@example.com");
		vi.spyOn(console, "log").mockImplementation(() => {});
	});

	afterEach(() => {
		vi.unstubAllEnvs();
		vi.restoreAllMocks();
		process.chdir(originalCwd);
		rmSync(tempDir, { recursive: true, force: true });
	});

	it("should commit the template in a path with spaces", () => {
		const projectPath = path.join(tempDir, "my cv data");

		init(projectPath);

		expect(committedFiles(projectPath)).toContain("config.yml");
	});

	it("should not run shell syntax in the path", () => {
		// `&` separates commands in both sh and cmd.exe
		const projectPath = path.join(tempDir, "cv & mkdir injected");

		init(projectPath);

		expect(committedFiles(projectPath)).toContain("config.yml");
		expect(existsSync(path.join(tempDir, "injected"))).toBe(false);
	});
});
