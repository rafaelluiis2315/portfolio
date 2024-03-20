
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Welcome = () => {
  return (
    <section id="home" className="w-full h-96 bg-accent flex flex-col items-center justify-center gap-6">
      <div className="w-40 h-40">
        <Image
          src="/profile.webp"
          alt="Imagem de perfil de Rafael Barreto"
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-full w-full h-full"
        />
      </div>

      <h1 className="text-5xl font-bold text-center">Rafael Luis Barreto Silva</h1>
    </section>
  );
}

export default Welcome;