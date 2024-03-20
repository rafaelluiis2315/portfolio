import About from "@/components/About";
import Projects from "@/components/Projects";
import Welcome from "@/components/Welcome";
import Certificaties from "@/components/Certificaties";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="">
      <Welcome />

      <Projects />

      <About />

      <Certificaties />

      <Contacts />
    </main>
  );
}
