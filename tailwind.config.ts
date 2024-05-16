import type { Config } from "tailwindcss";

export const tailwindColors: { [key: string]: string } = {
	current: "currentColor",
	transparent: "transparent",
	white: "#F9F9F9",
	primary: "#00ADB5",
	secondary: "#343840",
	"secondary-content": "#FFFFFF",
	base: "#222831",
};

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			colors: tailwindColors,
		},
	},
	plugins: [],
};
export default config;
