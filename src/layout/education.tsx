import { StyleSheet, View } from "@react-pdf/renderer";
import type { EducationData } from "../data-types/education-data.js";
import { SectionTitle } from "./components/section-title.js";
import { SubTitle } from "./components/sub-title.js";
import { Title } from "./components/title.js";
import { UnorderedList } from "./components/unordered-list.js";
import { space } from "./tokens.js";

const styles = StyleSheet.create({
	education: { marginTop: space[3] },
});

type Props = {
	education: EducationData;
};

const Education = ({ education }: Props) => {
	if (education.length === 0) return null;

	return (
		<View>
			<SectionTitle>Education</SectionTitle>
			{education.map(
				({ degree, endDate, information, school, startDate }, index) => (
					<View
						// biome-ignore lint/suspicious/noArrayIndexKey: items are never reordered
						key={index}
						style={index > 0 ? styles.education : undefined}
						// Entries are short, so keep each one on a single page
						wrap={false}
					>
						<Title>{degree}</Title>
						<SubTitle endDate={endDate} startDate={startDate} {...school} />
						{information !== undefined && (
							<UnorderedList
								items={information.map(
									({ content, title }) => `${title}: ${content.join(", ")}`,
								)}
							/>
						)}
					</View>
				),
			)}
		</View>
	);
};

export { Education };
