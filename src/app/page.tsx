import Image from "next/image";

import HeroSection from "./_components/hero/HeroSection";
import AboutMe from "./_components/about-me/AboutMe";

export default function Home() {
	return (
		<main className="w-full">
			<HeroSection />
			<AboutMe />
		</main>
	);
}
