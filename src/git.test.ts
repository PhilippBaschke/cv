import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { git } from "./git.js";

describe("git", () => {
	let tempDir: string;

	beforeEach(() => {
		tempDir = mkdtempSync(path.join(tmpdir(), "cv-git-"));

		// Isolate git from the user's config
		const emptyGitConfig = path.join(tempDir, "gitconfig");
		writeFileSync(emptyGitConfig, "");
		vi.stubEnv("GIT_CONFIG_GLOBAL", emptyGitConfig);
		vi.stubEnv("GIT_CONFIG_NOSYSTEM", "1");
	});

	afterEach(() => {
		vi.unstubAllEnvs();
		rmSync(tempDir, { recursive: true, force: true });
	});

	it("should ignore a repository set by the caller's env", () => {
		// e.g. when run from a pre-commit hook of `git commit -a`, which points
		// GIT_INDEX_FILE at a temporary index
		const callerRepo = path.join(tempDir, "caller");
		const repo = path.join(tempDir, "repo");
		git("init", callerRepo);
		git("init", repo);
		writeFileSync(path.join(repo, "file"), "");
		vi.stubEnv("GIT_DIR", path.join(callerRepo, ".git"));
		vi.stubEnv("GIT_WORK_TREE", callerRepo);
		vi.stubEnv("GIT_INDEX_FILE", path.join(callerRepo, ".git", "index"));

		git("-C", repo, "add", "file");

		expect(git("-C", repo, "ls-files")).toBe("file\n");
		expect(git("-C", callerRepo, "ls-files")).toBe("");
	});

	it("should keep git config set by the caller's env", () => {
		// e.g. a CI job providing the identity without a global gitconfig
		vi.stubEnv("GIT_CONFIG_COUNT", "1");
		vi.stubEnv("GIT_CONFIG_KEY_0", "user.name");
		vi.stubEnv("GIT_CONFIG_VALUE_0", "Caller");

		expect(git("config", "user.name")).toBe("Caller\n");
	});
});
