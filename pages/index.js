import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HamburgerMenu from "../components/Nav/HamburgerMenu";
// import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Credits from "../components/Credits/Credits";
import Rates from "../components/Rates/Rates";
import Gear from "../components/Gear/Gear";
import Terms from "../components/Terms/Terms";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import useScrollDirection from "../hooks/useScrollDirection";
import ImageSlider from "../components/Slider/Slider";
// import useScrollDirection from "../contexts/ScrollDirectionContext";
import fs from "fs/promises";
import path from "path";

export async function getServerSideProps() {
  const imagesDirectory = path.join(process.cwd(), "public/images/slideshow");
  const filenames = await fs.readdir(imagesDirectory);

  return {
    props: {
      images: filenames,
    },
  };
}

export default function Home({ images }) {
  const [scrollDirection, setIsAutoScrolling] = useScrollDirection();

  const handleMenuItemClick = (sectionId) => {
    setIsAutoScrolling(true);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => setIsAutoScrolling(false), 1000);
  };

  return (
    <>
      <header
        className={`w-full fixed top-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
          scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <HamburgerMenu onMenuItemClick={handleMenuItemClick} />
      </header>
      <main>
        <section id="hero" className="h-screen">
          {/* <Hero /> */}
          <Hero imageUrl="/images/frosted_glass.png">
            <h1 className="text-4xl font-bold">MYRIAM BOISSELLE</h1>
            <p>LOCATION SOUND MIXER & RECORDIST</p>

            <h2>SAN FRANCISCO & LA + NYC | MIAMI | MEXICO</h2>
            <p>GLOBAL ENTRY & TSA PRE-CHECK READY</p>

            <p>
              Proficient in mixing and recording double system sync sound with
              Arri, Red, Black Magic, Canon and Sony & DSLRs
            </p>

            <p>305-502-5390</p>
            <p>metamorphsound@gmail.com</p>
          </Hero>
        </section>
        <section id="credits" className="">
          {/* Section 1 content */}
          <ImageSlider images={images} />
          <Credits />
        </section>
        <section id="gear" className="h-screen">
          {/* Section 2 content */}
          <Gear />
        </section>
        <section id="rates" className="h-screen">
          {/* Section 3 content */}
          <Rates />
          <Terms />
        </section>
        <section id="about" className="h-screen">
          {/* Section 3 content */}
          <About />
        </section>
      </main>
    </>
  );
}
