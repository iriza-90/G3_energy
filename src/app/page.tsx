import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Capability } from "@/components/sections/Capability";
import { Rwanda } from "@/components/sections/Rwanda";
import { Values } from "@/components/sections/Values";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Capability />
      <Rwanda />
      <Values />
      <Contact />
    </>
  );
}
