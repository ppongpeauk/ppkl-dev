import PROFILE_PICTURE from "@/assets/images/profile.jpg";
import Image from "next/image";
import Link from "next/link";

export const runtime = "edge";

export default async function Home() {
	return (
		<main className="flex flex-col px-4 lg:px-0 lg:flex-row items-center justify-center pt-16 gap-16">
			<div className="lg:max-w-[480px] order-1 lg:order-2">
				<div className="flex flex-row items-center justify-between">
					<h1 className="text-xl font-bold">Hi, I&apos;m Pete.</h1>
					{/* nav */}
					{/* <nav className="flex flex-row gap-4">
						<a href="/blog">Blog</a>
						<a href="/projects">Projects</a>
					</nav> */}
				</div>
				<p className="mt-0">
					I&apos;m a software developer with a passion for building
					scalable and efficient systems, actively in search of
					opportunities that will allow me to help make the world a
					better place.
				</p>
				<p>
					Right now, I&apos;m working on <strong>Unitrade</strong>, a
					platform that let&apos;s college students buy and sell goods
					and services with other students on campus.
				</p>
				<p>
					I&apos;ve also been leading development on{" "}
					<Link
						className="font-bold text-black underline underline-offset-4"
						href="https://trycirclez.org"
						target="_blank"
					>
						Circlez
					</Link>
					, a platform that lets manufacturers and distributors track
					goals and milestones for their production lines.
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
			</div>
			<div className="rounded-lg pt-16 lg:pt-0 overflow-hidden">
				<Image
					src={PROFILE_PICTURE.src}
					alt="Pete Pongpeauk"
					width={320}
					height={320}
					quality={90}
					className="object-cover aspect-[0.75] h-auto"
					priority
				/>
			</div>
		</main>
	);
}
