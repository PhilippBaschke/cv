import { StyleSheet } from "@react-pdf/renderer";
import type { Location } from "../../data-types/location.js";
import { formatDate } from "../format-date.js";
import { space } from "../tokens.js";
import type { HorizontalListItem } from "./horizontal-list.js";
import { HorizontalList } from "./horizontal-list.js";

const styles = StyleSheet.create({
	container: { marginBottom: space[2] },
});

type Props = {
	endDate?: string;
	location?: Location;
	name: string;
	startDate: string;
	website?: string;
};

const SubTitle = ({ endDate, location, name, startDate, website }: Props) => {
	const date =
		endDate === undefined
			? `Since ${formatDate(startDate)}`
			: `${formatDate(startDate)}–${formatDate(endDate)}`;

	const nameWithLocation =
		location === undefined
			? name
			: `${name} (${location.city}, ${location.country})`;

	const items: HorizontalListItem[] = [
		website === undefined
			? { text: nameWithLocation, type: "text" }
			: { src: `https://${website}`, text: nameWithLocation, type: "link" },
		{ text: date, type: "text" },
	];

	return <HorizontalList items={items} quiet style={styles.container} />;
};

export { SubTitle };
