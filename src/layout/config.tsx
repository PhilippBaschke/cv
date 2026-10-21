import { createContext, useContext } from "react";
import type { Config } from "../data-types/config.js";

const ConfigContext = createContext<Config>({
	color: {
		primary: "#068093",
	},
	font: {
		base: "Zilla Slab",
	},
});

const ConfigProvider = ConfigContext.Provider;
const useConfig = () => useContext(ConfigContext);

export { ConfigProvider, useConfig };
