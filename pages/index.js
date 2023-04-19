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
      <main className="w-full max-w-4xl mx-auto">
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
          {/* <ImageSlider images={images} /> */}
          <Credits />
        </section>

        {/* <div className="container flex justify-center px-32 py-8">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8 mx-auto md:gap-y-0 
          sm:px-8
          xl:pl-60 xl:pr-30"
          >
            <section className="min-w-[300px]" id="rates">
              <Rates />
            </section>
            <section className="" id="gear">
              <Gear />
            </section>
          </div>
        </div> */}

        <div className="w-full mx-auto max-w-lg p-8">
          <h1 className="text-2xl font-bold">LABOR</h1>
          <h2>DAY RATE $800/10 HOUR DAY - OT AFTER 10 $120 PER HR</h2>
          <h2>GET IN TOUCH ABOUT 12 HOUR DAYS</h2>
        </div>

        <div className="container flex justify-center pl-44 py-8 font-roboto">
          <div className="grid grid-cols-1 md:grid-cols-2 font-sans">
            <section className="min-w-[400px] px-4" id="rates">
              <Rates />
            </section>
            <section className="min-w-[300px] px-4" id="gear">
              <Gear />
            </section>
          </div>
        </div>

        <div className="max-w-3xl mx-auto p-4">
          <Terms />
        </div>

        <section
          id="about"
          className="h-screen max-w-3xl mx-auto p-4 space-y-4"
        >
          <About />
        </section>
      </main>
    </>
  );
}
