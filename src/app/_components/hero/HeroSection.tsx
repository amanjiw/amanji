import Image from "next/image";
import React from "react";

const HeroSection = () => {
	return (
		<section className="w-full pt-[123px] flex justify-center  gap-12">
			<div className="uppercase font-bold flex flex-col gap-36 ">
				<div className="flex">
					{" "}
					<div className="mt-24 -rotate-6">
						<Image
							src="/images/arrow.png"
							height={221}
							width={90}
							alt="arrow"
						/>
					</div>
					<div className="">
						<div className="text-[96px]">
							<p className="">front end</p>
							<p className="text-primary ms-32 ">enginner</p>
						</div>
						<div className="btns flex  gap-5 ps-10 mt-2">
							<button className="bg-primary py-2 px-4 rounded-full">
								Hire me
							</button>
							<button className="bg-secondary py-2 px-4 rounded-full flex items-center gap-3">
								Download CV
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={3}
									stroke="currentColor"
									className="w-6 h-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<button className="bg-secondary w-24 h-24 self-center flex justify-center items-center hover:border-white  transition-all duration-300 ease-in-out hover:bg-primary hover:scale-110 ">
					<Image
						src="/images/arrow-down.png"
						height={36}
						width={21}
						alt="arrow"
					/>
				</button>
			</div>
			<div className="">
				<Image src="/images/hero.png" height={655} width={540} alt="" />
			</div>
		</section>
	);
};

export default HeroSection;
