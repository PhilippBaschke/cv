import { StyleSheet } from "@react-pdf/renderer";
import type { ReactNode } from "react";
import { typeScale } from "../tokens.js";
import { Text } from "./text.js";

const styles = StyleSheet.create({
	title: { fontSize: typeScale[1], lineHeight: 1.3 },
});

type Props = {
	children: ReactNode;
};

const Title = ({ children }: Props) => (
	<Text strong style={styles.title}>
		{children}
	</Text>
);

export { Title };
