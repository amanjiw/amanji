import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<span className="text-primary">Portfolio</span>
			<span className="text-secondary">Portfolio</span>
			<Image src="/images/hero.png" height={655} width={540} alt="" />
		</main>
	);
}
