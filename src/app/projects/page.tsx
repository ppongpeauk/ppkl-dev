import ProjectTile from "./_components/project_tile";
import { projects } from "@/projects";

export const runtime = "edge";

export default async function Projects() {
	const projects_tiles = projects.map((project) => {
		return (
			<ProjectTile
				id={project.id}
				key={project.id}
				name={project.name}
				short_description={project.short_description}
				image={project.image}
				link={project.link}
			/>
		);
	});

	return (
		<main className="flex flex-col items-center justify-center pt-16">
			<div className="lg:w-[480px] order-1">
				<div className="flex flex-row items-center justify-between">
					<h1 className="text-xl font-bold">Projects</h1>
					{/* nav */}
					<nav className="flex flex-row gap-4">
						<a href="/">{"< Back"}</a>
					</nav>
				</div>
				<div className="flex flex-col gap-4">{projects_tiles}</div>
			</div>
		</main>
	);
}
