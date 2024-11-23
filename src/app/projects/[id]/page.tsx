import { projects } from "@/projects";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ProjectPage({
	params,
}: {
	params: { id: string };
}) {
	const id = params.id;
	const project = projects.find((project) => project.id === id);

	if (!project) {
		notFound();
	}

	return (
		<div>
			<h1>Project Page</h1>
		</div>
	);
}
