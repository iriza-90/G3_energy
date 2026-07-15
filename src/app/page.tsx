import { Hero } from "@/components/sections/Hero";
import { Ticker } from "@/components/sections/Ticker";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { TrackRecord } from "@/components/sections/TrackRecord";
import { Partner } from "@/components/sections/Partner";
import { Flagship } from "@/components/sections/Flagship";
import { Impact } from "@/components/sections/Impact";
import { Markets } from "@/components/sections/Markets";
import { Values } from "@/components/sections/Values";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Services />
      <TrackRecord />
      <Partner />
      <Flagship />
      <Impact />
      <Markets />
      <Values />
      <Contact />
    </>
  );
}
