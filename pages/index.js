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

// import useScrollDirection from "../contexts/ScrollDirectionContext";
import fs from "fs/promises";
import path from "path";
import RateCard from "../components/RateCard/RateCard";
import ThumbnailGrid from "../components/ThumbnailGrid/ThumbnailGrid";
import LogosBox from "../components/LogosBox/LogosBox";


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
      id: '7ojh4xYoJRU',
      thumbnail: 'https://img.youtube.com/vi/7ojh4xYoJRU/maxresdefault.jpg',
      description: "Woman of Earth"
    },
    {
      id: 'h6n4BpZtl6k',
      thumbnail: 'https://img.youtube.com/vi/h6n4BpZtl6k/maxresdefault.jpg',
      description: "Work Sounds"
    },
    {
      id: 'bbtcUPJ_N4U',
      thumbnail: 'https://img.youtube.com/vi/bbtcUPJ_N4U/maxresdefault.jpg',
      description: "The Principle of Pleasure"
    },
    // {
    //   id: 'jb79tpguTRY',
    //   thumbnail: 'https://img.youtube.com/vi/jb79tpguTRY/maxresdefault.jpg',
    //   description: "Interview with SF Mayor London Breed"
    // },
    {
      id: 'i2QH5a4xrpY',
      thumbnail: 'https://img.youtube.com/vi/i2QH5a4xrpY/maxresdefault.jpg',
      description: "CNN: The Whole Story with Anderson Cooper S1E15 Without Roe - Abortion (2024 Emmy-winning Series)"
    },
    {
      id: 'MY1vgd8YYaU',
      thumbnail: 'https://img.youtube.com/vi/MY1vgd8YYaU/maxresdefault.jpg',
      description: "ESPN: Interview with Steph Curry & De'Aaron Fox"
    },
    {
      id: '8jHxdYGqUaA',
      thumbnail: 'https://img.youtube.com/vi/8jHxdYGqUaA/maxresdefault.jpg',
      description: "Nat Geo: Indigenous Women Saving Lives"
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
      <main className="w-full mx-auto bg-white">
        <section id="hero" className="">
          {/* <Hero imageUrl="/images/frosted_glass.png" /> */}
          <Hero />
        </section>



        {/* <BackgroundGradient color1="from-zinc-100" color2="to-sky-100" /> */}

        <section className="bg-slate-900 py-6">
          <ThumbnailGrid videos={videos} />
        </section>

        <section className="p-6">
          <LogosBox />
        </section>

        <section id="credits" className="">
          {/* <ImageSlider images={images} /> */}
          <Credits />
        </section>

        {/* Labor banner */}
        <section
          className="w-full mx-auto p-4 bg-slate-900 text-white flex flex-col justify-center items-center"
          id="rates"
        >
          <h1 className="text-2xl font-extrabold pb-2">LABOR</h1>

          <p className="text-md font-bold">DAY RATE: $850/10 HOUR DAY</p>
          <p className="text-md font-light">OT AFTER 10 HOURS @ $120/HR</p>
          <p className="text-sm font-light p-1">GET IN TOUCH ABOUT 12 HOUR DAYS</p>
          
        </section>

        {/* Rates and Gear */}
        <RateCard className="w-full flex flex-wrap lg:flex-no-wrap justify-start justify-center lg:justify-center py-6">
          <section 
            className="w-full lg:w-1/2 max-w-2xl lg:max-w-xl 2xl:max-w-2xl py-4">
            <Rates />
          </section>
          <section
            className="w-full lg:w-1/2 max-w-2xl lg:max-w-xl 2xl:max-w-2xl lg:py-4"
            id="gear"
          >
            <Gear />
          </section>
        </RateCard>

        {/* <BackgroundGradient color1="from-sky-100" color2="to-zinc-100" /> */}

        {/* <div className="mx-auto px-40"> */}
        <div className="mx-auto w-full max-w-2xl lg:max-w-2xl 2xl:max-w-2xl">
          <Terms />
        </div>

        {/* <section id="about" className="mx-auto px-32 space-y-4 "> */}
        <section id="about" className="mx-auto w-full max-w-2xl lg:max-w-2xl; 2xl:max-w-2xl py-4">
          <About />
        </section>

        <Footer />

      </main>
    </>
  );
}
