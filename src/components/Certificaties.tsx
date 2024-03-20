import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

const certificaties = [
    {
        title: "React do Zero a Maestria (c/ hooks, router, API, Projetos)",
        img: "/certifications/react-do-zero-a-maestria.webp",
        link: "https://ude.my/UC-7a79bb64-e05e-432b-b340-73f0e9c45047/",
    },
    {
        title: "Spring Boot Expert: JPA, RESTFul API, Security, JWT e Mais",
        img: "/certifications/spring-boot-expert.webp",
        link: "https://ude.my/UC-6e074ce4-8c89-48d0-922a-1367febde921/",
    },
    {
        title: "Clean Code na Prática (Código Limpo)",
        img: "/certifications/clean-code-na-pratica.webp",
        link: "https://ude.my/UC-536b9540-1581-4610-a578-f5df6b86c36a",
    },
    {
        title: "Integração contínua com testes, utilizando Jenkins",
        img: "/certifications/integracao-continua-com-testes.webp",
        link: "https://ude.my/UC-8d871d77-1045-4d2b-839c-ea27199fce8c",
    },
    {
        title: "Testes funcionais de aplicações Android com Appium",
        img: "/certifications/testes-appium.webp",
        link: "https://ude.my/UC-5d688eff-455f-4c12-b234-c7ce5edb855a",
    },
];

const Certificaties = () => {
    return (
        <section id="certificaties" className="flex flex-col gap-8 items-center pt-5 p-10">

            <h2 className="text-primary text-3xl font-bold">Certificações</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {certificaties.map((certificatie, index) => (
                    <Link href={certificatie.link} key={index}>
                        <Card>
                            <CardHeader>
                                <Image
                                    src={certificatie.img}
                                    alt={`Imagem do certificado em ${certificatie.title}`}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-auto object-contain h-44"
                                />
                            </CardHeader>
                            <CardContent>
                                {certificatie.title}
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

        </section>
    );
}

export default Certificaties;