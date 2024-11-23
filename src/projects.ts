export const projects = [
    {
        id: "unitrade",
        name: "Unitrade",
        short_description: "Campus marketplace for college students.",
        image: "/images/projects/example.jpg",
        link: "https://unitrade.so",
    }
]

export type Project = {
    name: string;
    short_description: string;
    image: string;
    id: string;
    link: string;
}