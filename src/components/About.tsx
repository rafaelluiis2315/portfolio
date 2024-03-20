const About = () => {
    return (
        <section id="about" className="flex flex-col gap-8 items-center pt-5 p-10 bg-accent">
            <div className="flex flex-col gap-2 items-center">
                <h2 className="text-primary text-3xl font-bold">Sobre</h2>

                <p className="text-justify w-full lg:w-[50rem]">
                    Desenvolvedor de Software com extensa experiência em qualidade e testes de sistemas robustos e de alta demanda. Atualmente cursando Análise e Desenvolvimento de Sistemas, busco um ambiente profissional dinâmico e inovador. Meu objetivo é aprofundar meu conhecimento técnico, contribuindo para projetos desafiadores enquanto continuo aprendendo e adquirindo novas habilidades.
                </p>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-primary text-2xl font-bold">Habilidades</h3>


                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">

                    <ul className="list-disc">
                        <li>Liferay</li>
                        <li>JavaScript</li>
                        <li>Typescript</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>HTML & CSS</li>
                    </ul>

                    <ul className="list-disc">
                        <li>React</li>
                        <li>Next.js</li>
                        <li>Node.js</li>
                        <li>Express</li>
                        <li>Spring Boot</li>
                        <li>Nest.js</li>
                    </ul>

                    <ul className="list-disc">
                        <li>MySQL</li>
                        <li>Postgres</li>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                        <li>Git</li>
                        <li>AWS</li>
                    </ul>

                    <ul className="list-disc">
                        <li>Tailwind CSS</li>
                        <li>Bootstrap</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>JUnit</li>
                        <li>Mockito</li>
                    </ul>

                    <ul className="list-disc">
                        <li>Selenium</li>
                        <li>Appium</li>
                        <li>RestAssured</li>
                        <li>Postman</li>
                        <li>Jira</li>
                        <li>Confluence</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-2 items-center">
                <h3 className="text-primary text-2xl font-bold">Idiomas</h3>


                <ul className="flex flex-col md:flex-row gap-5">
                    <li>Português - Nativo</li>
                    <li>Inglês - Intermediario</li>
                    <li>Espanhol - Basico</li>
                </ul>
            </div>
        </section >
    );
}

export default About;