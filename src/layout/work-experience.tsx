import { StyleSheet, View } from "@react-pdf/renderer";
import type { WorkExperienceData } from "../data-types/work-experience-data.js";
import { Link } from "./components/link.js";
import { SectionTitle } from "./components/section-title.js";
import { SubTitle } from "./components/sub-title.js";
import { Text } from "./components/text.js";
import { Title } from "./components/title.js";
import { UnorderedList } from "./components/unordered-list.js";
import { space } from "./tokens.js";

const styles = StyleSheet.create({
	workExperience: { marginTop: space[3] },
});

type Props = {
	workExperience: WorkExperienceData;
};

const WorkExperience = ({ workExperience }: Props) => {
	if (workExperience.length === 0) return null;

	return (
		<View>
			<SectionTitle>Work Experience</SectionTitle>
			{workExperience.map(
				(
					{ achievements, company, endDate, jobTitle, product, startDate },
					index,
				) => (
					<View
						// biome-ignore lint/suspicious/noArrayIndexKey: items are never reordered
						key={index}
						style={index > 0 ? styles.workExperience : undefined}
						// Entries are short, so keep each one on a single page
						wrap={false}
					>
						<Title>{jobTitle}</Title>
						<SubTitle endDate={endDate} startDate={startDate} {...company} />
						{product !== undefined && (
							<Text>
								{product.description}
								{product.website !== undefined && (
									<Text>
										{" "}
										(
										<Link src={`https://${product.website}`}>
											{product.website}
										</Link>
										)
									</Text>
								)}
							</Text>
						)}
						<UnorderedList items={achievements} />
					</View>
				),
			)}
		</View>
	);
};

export { WorkExperience };
