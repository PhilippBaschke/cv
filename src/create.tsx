import fs from "node:fs";
import path from "node:path";
import { cwd } from "node:process";
import { renderToFile } from "@react-pdf/renderer";
import { load } from "js-yaml";
import React from "react";
import type { Config } from "./data-types/config.js";
import type { ContactData } from "./data-types/contact-data.js";
import type { EducationData } from "./data-types/education-data.js";
import type { PersonalData } from "./data-types/personal-data.js";
import type { SkillsData } from "./data-types/skills-data.js";
import type { WorkExperienceData } from "./data-types/work-experience-data.js";
import { ConfigProvider } from "./layout/config.js";
import { Cv } from "./layout/cv.js";
import { registerFonts } from "./layout/register-fonts.js";

type Options = {
	dataProject?: string;
};

const create = async (outputFile: string, { dataProject }: Options) => {
	const filePath = path.resolve(outputFile);
	const projectPath = path.resolve(dataProject ?? cwd());
	const imagePath = path.join(projectPath, "data", "image.png");

	const config = load(
		fs.readFileSync(path.join(projectPath, "config.yml"), "utf8"),
	) as Config;

	const contact = load(
		fs.readFileSync(path.join(projectPath, "data", "contact.yml"), "utf8"),
	) as ContactData;

	const education = load(
		fs.readFileSync(path.join(projectPath, "data", "education.yml"), "utf8"),
	) as EducationData;

	const personal = load(
		fs.readFileSync(path.join(projectPath, "data", "personal.yml"), "utf8"),
	) as PersonalData;

	const skills = load(
		fs.readFileSync(path.join(projectPath, "data", "skills.yml"), "utf8"),
	) as SkillsData;

	const workExperience = load(
		fs.readFileSync(
			path.join(projectPath, "data", "work-experience.yml"),
			"utf8",
		),
	) as WorkExperienceData;

	registerFonts(projectPath, [config.font.base]);

	console.log(`Saving CV in ${filePath}`);
	await renderToFile(
		<ConfigProvider value={config}>
			<Cv
				contact={contact}
				education={education}
				image={fs.existsSync(imagePath) ? imagePath : undefined}
				personal={personal}
				skills={skills}
				workExperience={workExperience}
			/>
		</ConfigProvider>,
		filePath,
	);
};

export { create };
