import { View } from "@react-pdf/renderer";
import React from "react";
import type { PersonalData } from "../data-types/personal-data.js";
import { SectionTitle } from "./components/section-title.js";
import { Text } from "./components/text.js";

type Props = Pick<PersonalData, "summary">;

const Summary = ({ summary }: Props) => {
	if (summary === undefined) return null;

	return (
		<View>
			<SectionTitle>Summary</SectionTitle>
			<Text>{summary}</Text>
		</View>
	);
};

export { Summary };
