import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

const projects = [
    {
        title: "E-Commerce FSW",
        img: "/projects/fsw-store.webp",
        desciption: "Projeto de e-commerce desenvolvido em Next.js, com metodos de pagamentos utilizando a API do Strip,  autenticação e autorização de usuarios, e uma Dashboard para o gerenciamento do e-commerce.",
        technologies: ["React", "Next.js", "Next Auth", "Stripe", "Prisma", "Postgres", "AWS S3", "Shadcn/ui", "Tailwind CSS"],
        site_link: "https://fsw-store-ashy.vercel.app",
        repository_link: "https://github.com/rafaelluiis2315/fsw-store",
    },
    {
        title: "Mini Blog",
        img: "/projects/mini-blog.webp",
        desciption: "Blog desenvolvido em React, com autenticação e autorização de usuarios, e uma Dashboard para o gerenciamento do blog. Além de um sistema de busca por tags.",
        technologies: ["React", "React Router Dom", "Javascript", "Firebase", "CSS", "Bootstrap Icon"],
        site_link: "https://blog-react-indol-eight.vercel.app",
        repository_link: "https://github.com/rafaelluiis2315/blog_react",
    },
    {
        title: "Secret Word",
        img: "/projects/secret-word.webp",
        desciption: "Jogo de adivinhação de palavras, onde o jogador tem que adivinhar a palavra secreta, com dicas sobre a palavra. Jogo também conta com um sistema de pontuação.",
        technologies: ["React", "Javascript", "React Hook's"],
        site_link: "https://secret-word-five-zeta.vercel.app",
        repository_link: "https://github.com/rafaelluiis2315/secret-word",
    },
];

const Projects = () => {
    return (
        <section id="projects" className="flex flex-col gap-8 items-center pt-5 p-10">
            <h2 className="text-primary text-3xl font-bold">Projetos</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {projects.map((project, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Image
                                src={project.img}
                                width={0}
                                height={0}
                                alt={project.title}
                                sizes="100vw"
                                className="w-auto object-contain h-44"
                            />

                            <CardTitle>
                                {project.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-col gap-2 text-sm">
                            <p>
                                {project.desciption}
                            </p>

                            <span>
                                Tecnologias:
                            </span>

                            <div className="min-h-28">
                                <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2">
                                    {project.technologies.map((technology, index) => (
                                        <li key={index}>{technology}</li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-col md:flex-row gap-2" >
                            {project.repository_link && (
                                <Link href={project.repository_link} aria-label="site" className="w-full">
                                    <Button className="w-full">
                                        Ver Repositorio
                                    </Button>
                                </Link>
                            )}

                            {project.site_link && (
                                <Link href={project.site_link} aria-label="site" className="w-full">
                                    <Button className="w-full">
                                        Ver Site
                                    </Button>
                                </Link>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default Projects;