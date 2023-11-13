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
import ThumbnailGrid from "../components/ThumbnailGrid/ThumbnailGrid";
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

  const videos = [
    // Add your video data here
    // { id: 'youtube_video_id', thumbnail: 'thumbnail_url' },

    {
      id: 'jb79tpguTRY',
      thumbnail: 'https://img.youtube.com/vi/jb79tpguTRY/maxresdefault.jpg',
    },
    {
      id: 'MY1vgd8YYaU',
      thumbnail: 'https://img.youtube.com/vi/MY1vgd8YYaU/maxresdefault.jpg'
    },
    {
      id: '8jHxdYGqUaA',
      thumbnail: 'https://img.youtube.com/vi/8jHxdYGqUaA/maxresdefault.jpg'
    },

  ];

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
      <main className="w-full mx-auto bg-zinc-10f0">
        <section id="hero" className="">
          <Hero imageUrl="/images/frosted_glass.png" />
        </section>

        <BackgroundGradient color1="from-zinc-100" color2="to-sky-100" />

        <section>
          <ThumbnailGrid videos={videos} />
        </section>

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

        {/* <BackgroundGradient color1="from-sky-100" color2="to-zinc-100" /> */}

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
