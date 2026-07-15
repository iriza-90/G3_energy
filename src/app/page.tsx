import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Impact } from "@/components/sections/Impact";
import { Markets } from "@/components/sections/Markets";
import { Values } from "@/components/sections/Values";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Impact />
      <Markets />
      <Values />
      <Team />
      <Contact />
    </>
  );
}
