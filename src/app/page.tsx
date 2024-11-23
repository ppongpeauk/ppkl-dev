import PROFILE_PICTURE from "@/assets/images/profile.jpg";
import Image from "next/image";

export const runtime = "edge";

export default async function Home() {
	return (
		<main className="flex flex-col items-center justify-center pt-16">
			<div className="lg:max-w-[480px] order-1">
				<div className="flex flex-row items-center justify-between">
					<h1 className="text-xl font-bold">Hi, I&apos;m Pete.</h1>
					{/* nav */}
					{/* <nav className="flex flex-row gap-4">
						<a href="/blog">Blog</a>
						<a href="/projects">Projects</a>
					</nav> */}
				</div>
				<p className="mt-0">
					I&apos;m a student currently pursuing a Bachelor of Science
					in Computer Science at <i>George Mason University.</i>
				</p>
				<p>
					I&apos;m a software developer with a passion for building
					scalable and efficient systems, actively looking for
					opportunities that will allow me to help make the world a
					better place.
				</p>
				<p>
					Right now, I&apos;m working on <strong>Unitrade</strong>, a
					platform that let&apos;s college students buy and sell goods
					and services with other students on campus.
				</p>
				{/* <p>
					You can view all of my projects <a href="/projects">here</a>
					.
				</p> */}
				<p>
					<i>Last updated: September 5th, 2024</i>
				</p>
				{/* links */}
				<section className="flex gap-2">
					<a href="https://github.com/ppongpeauk" target="_blank">
						GitHub
					</a>
					<a
						href="https://linkedin.com/in/pete-pongpeauk"
						target="_blank"
					>
						LinkedIn
					</a>
					<a href="/resume.pdf" target="_blank">
						Résumé
					</a>
					<a href="mailto:pete@ppkl.dev">Contact</a>
				</section>
				<section style={{ paddingTop: "1.25rem" }} className="order-2">
					<Image
						src={PROFILE_PICTURE.src}
						alt="Pete Pongpeauk"
						width={240}
						height={240}
						quality={90}
						className="object-cover rounded-lg border"
						priority
					/>
				</section>
			</div>
		</main>
	);
}
