import { StyleSheet, View } from "@react-pdf/renderer";
import type { PersonalData } from "../data-types/personal-data.js";
import { SectionTitle } from "./components/section-title.js";
import { Text } from "./components/text.js";
import { space } from "./tokens.js";

const styles = StyleSheet.create({
	paragraph: { marginTop: space[2] },
});

type Props = Pick<PersonalData, "summary">;

const Summary = ({ summary }: Props) => {
	if (summary === undefined) return null;

	// Folded YAML blocks (>) turn blank lines into single line breaks
	const paragraphs = summary.trim().split(/\n+/);

	return (
		<View>
			<SectionTitle>Summary</SectionTitle>
			{paragraphs.map((paragraph, index) => (
				<Text
					// biome-ignore lint/suspicious/noArrayIndexKey: paragraphs are never reordered
					key={index}
					style={index > 0 ? styles.paragraph : undefined}
				>
					{paragraph}
				</Text>
			))}
		</View>
	);
};

export { Summary };
