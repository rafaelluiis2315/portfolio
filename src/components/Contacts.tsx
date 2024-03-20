import { GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";

const Contacts = () => {
    return (
        <section
            id="contacts"
            className="flex flex-col items-center gap-8 bg-accent p-10 pt-5"
        >
            <h2 className="text-3xl font-bold text-primary">Contatos</h2>

            <div className="flex flex-col items-center gap-2">
                <p>
                    Email:{" "}
                    <Link
                        href="mailto:rafael.luisbarreto23@gmail.com"
                        className="text-primary"
                    >
                        rafael.luisbarreto23@gmail.com
                    </Link>
                </p>

                <div className="flex gap-2">
                    <Link
                        href="https://www.linkedin.com/in/rafael-luis-817340230/"
                        aria-label="linkedin"
                    >
                        <LinkedinIcon size={40} />
                    </Link>
                    <Link href="https://github.com/rafaelluiis2315" aria-label="github">
                        <GithubIcon size={40} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
