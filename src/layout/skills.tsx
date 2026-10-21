import { StyleSheet, View } from "@react-pdf/renderer";
import type { SkillsData } from "../data-types/skills-data.js";
import { SectionTitle } from "./components/section-title.js";
import { SkillsList } from "./components/skills-list.js";
import { space } from "./tokens.js";

const styles = StyleSheet.create({
	spacedList: { marginBottom: space[2] },
});

const Skills = ({ familiar, proficient }: SkillsData) => (
	<View>
		<SectionTitle>Skills</SectionTitle>
		<SkillsList
			skills={proficient}
			style={styles.spacedList}
			title="Proficient"
		/>
		<SkillsList skills={familiar} title="Familiar" />
	</View>
);

export { Skills };
