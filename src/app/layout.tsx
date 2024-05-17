import { Poppins } from "next/font/google";
import { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

import Header from "./_components/header/Header";
const poppins = Poppins({
	display: "swap",
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Amanji",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<title>Amanji</title>
			</Head>
			<body className={`bg-base text-white ${poppins.className}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
