import Image from "next/image"
import { Project } from "@/projects"

export default function ProjectTile({ name, image, id, short_description }: Project) {
    return (
        // disable link decoration
        <a
            href={`/projects/${id}`}
            className="relative border-solid border-1 border-gray-200 overflow-hidden rounded-xl aspect-[2/1]"
            style={{ textDecoration: "none", color: "inherit" }}
        >
            <div className="flex flex-col items-center justify-center">
                <Image src={image} alt={name} fill className="object-cover" />
            </div>
            {/* hover info */}
            {/* gradient overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 text-white font-sans">
                <div className="flex items-end bg-gradient-to-t from-black to-transparent w-full h-full">
                    <div className="flex flex-col items-start justify-center p-4">
                        <h1 className="text-xl font-bold m-0 mb-1">
                            {name}
                            <span className="font-normal text-xs ml-1">
                                (04/18/2024)
                            </span>
                        </h1>
                        <p className="text-sm m-0">{short_description}</p>
                    </div>
                </div>
            </div>
        </a>
    )
}