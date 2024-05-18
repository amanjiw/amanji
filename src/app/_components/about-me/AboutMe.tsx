import React from "react";
import Image from "next/image";

const AboutMe = () => {
	return (
		<section className=" flex justify-center gap-36 mt-64 h-screen items-center pt-20">
			<div className="">
				<Image
					src="/images/intro.png"
					height={577}
					width={665}
					alt="about me"
				/>
			</div>
			<div className="w-1/3 flex flex-col">
				<Image
					src="/images/music.png"
					width={61}
					height={46}
					alt="about me"
				/>
				<div className="flex items-center mt-16 gap-6 mb-5">
					<h2 className="text-6xl font-bold">About <span className="text-primary">me</span></h2>
					<Image
						src="/images/lightbulb.png"
						width={57}
						height={88}
						alt="about me"
					/>
				</div>
				<p className="text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc vulputate libero et velit interdum, ac aliquet odio
					mattis. Class aptent taciti sociosqu ad litora torquent per
					conubia nostra, per inceptos himenaeos. Curabitur tempus
					urna at turpis condimentum lobortis.... Read more
				</p>

				<Image
					src="/images/arrow-up.png"
					width={113}
					height={169}
					alt="about me"
					className="self-center mt-16"
				/>
			</div>
		</section>
	);
};

export default AboutMe;
