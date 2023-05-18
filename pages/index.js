import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import HamburgerMenu from "../components/Nav/HamburgerMenu";
// import Nav from "../components/Nav/Nav";
import Hero from "../components/Hero/Hero";
import Credits from "../components/Credits/Credits";
import Rates from "../components/Rates/Rates";
import Gear from "../components/Gear/Gear";
import Terms from "../components/Terms/Terms";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import BackgroundGradient from "../components/BackgroundGradient/BackgroundGradient";
import useScrollDirection from "../hooks/useScrollDirection";
import ImageSlider from "../components/Slider/Slider";
// import useScrollDirection from "../contexts/ScrollDirectionContext";
import fs from "fs/promises";
import path from "path";
import RateCard from "../components/RateCard/RateCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <main className="w-full mx-auto bg-zinc-100">
        <section id="hero" className="h-screen">
          {/* <Hero /> */}

          {/* <Hero imageUrl="/images/frosted_glass.png">
            <h1 className="text-4xl font-bold">MYRIAM BOISSELLE</h1>
            <p>LOCATION SOUND MIXER & RECORDIST</p>

            <h2>SAN FRANCISCO & LA + NYC | MIAMI | MEXICO</h2>
            <p>GLOBAL ENTRY & TSA PRE-CHECK READY</p>

            <p>
              Proficient in mixing and recording double system sync sound with
              Arri, Red, Black Magic, Canon and Sony & DSLRs
            </p>

            <div classname="flex mex-auto justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-phone"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
          </Hero> */}

          <Hero imageUrl="/images/frosted_glass.png" />
        </section>

        <BackgroundGradient color1="from-zinc-100" color2="to-sky-100" />

        <section id="credits" className="bg-sky-100 pb-4">
          {/* <ImageSlider images={images} /> */}
          <Credits />
        </section>

        <section
          className="w-full mx-auto p-4 bg-slate-800 text-zinc-100 flex flex-col justify-center items-center"
          id="rates"
        >
          <h1 className="text-2xl font-extrabold">LABOR</h1>

          <p className="text-lg font-light">DAY RATE: $800/10 HOUR DAY</p>
          <p className="text-lg font-extralight">OT AFTER 10 HOURS @ $120/HR</p>
          {/* <h2>DAY RATE $800/10 HOUR DAY - OT AFTER 10 $120 PER HR</h2> */}
          {/* <h2>GET IN TOUCH ABOUT 12 HOUR DAYS</h2> */}
        </section>

        <RateCard className="flex flex-wrap lg:flex-no-wrap justify-start justify-center lg:justify-center bg-sky-100">
          <section className="w-full lg:w-1/2 max-w-xl lg:max-w-md 2xl:max-w-lg px-4 p-4">
            <Rates />
          </section>
          <section
            className="w-full lg:w-1/2 max-w-xl lg:max-w-md 2xl:max-w-lg p-4"
            id="gear"
          >
            <Gear />
          </section>
        </RateCard>

        <BackgroundGradient color1="from-emerald-100" color2="to-zinc-100" />

        <div className="max-w-2xl mx-auto p-4">
          <Terms />
        </div>

        <section id="about" className="max-w-2xl mx-auto p-4 space-y-4">
          <About />
        </section>

        <Footer />
      </main>
    </>
  );
}
