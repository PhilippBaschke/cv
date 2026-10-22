import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import type { ContactData } from "../data-types/contact-data.js";
import type { EducationData } from "../data-types/education-data.js";
import type { PersonalData } from "../data-types/personal-data.js";
import type { SkillsData } from "../data-types/skills-data.js";
import type { WorkExperienceData } from "../data-types/work-experience-data.js";
import { useConfig } from "./config.js";
import { ContactAndLocation } from "./contact-location.js";
import { Education } from "./education.js";
import { Header } from "./header.js";
import { Skills } from "./skills.js";
import { Summary } from "./summary.js";
import { color, fontWeight, lineHeight, space, typeScale } from "./tokens.js";
import { WorkExperience } from "./work-experience.js";

type Props = {
	contact: ContactData;
	education: EducationData;
	image?: string;
	personal: PersonalData;
	skills: SkillsData;
	workExperience: WorkExperienceData;
};

const styles = StyleSheet.create({
	page: {
		color: color.text.intense,
		fontSize: typeScale[0],
		fontWeight: fontWeight.base,
		lineHeight,
		padding: space[5],
		paddingLeft: space[6],
		paddingRight: space[7],
	},
});

const Cv = ({
	contact,
	education,
	image,
	personal,
	skills,
	workExperience,
}: Props) => {
	const config = useConfig();

	return (
		<Document>
			<Page size="A4" style={[styles.page, { fontFamily: config.font.base }]}>
				<Header
					image={image}
					jobTitle={personal.jobTitle}
					name={personal.name}
				/>
				<ContactAndLocation {...contact} location={personal.location} />
				<Summary summary={personal.summary} />
				<WorkExperience workExperience={workExperience} />
				<Education education={education} />
				<Skills {...skills} />
			</Page>
		</Document>
	);
};

export { Cv };
