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
// import useScrollDirection from "../contexts/ScrollDirectionContext";

export default function Home() {
  // const scrollDirection = useScrollDirection();

  // return (
  // <div className={styles.container}>
  //   <Head>
  //     <title>
  //       Production Sound Mixing for San Francisco, Los Angeles, and Beyond!
  //     </title>
  //     <meta name="description" content="Generated by create next app" />
  //     <link rel="icon" href="/favicon.ico" />
  //   </Head>

  //   <main className={styles.main}>
  //     {/* <Nav /> */}
  //     <HamburgerMenu />
  //     <Hero />
  //     <Credits id="credits"/>
  //     <Rates id="rates"/>
  //     <Gear id="gear"/>
  //     <Terms id="terms"/>
  //     <About id="about"/>
  //     <Footer />
  //   </main>
  // </div>

  // <>
  //   <header className="w-full fixed top-0 z-50 bg-white">
  //     {/* Other header content */}
  //     <HamburgerMenu />
  //   </header>
  //   <main>
  //     <section id="credits" className="h-screen">
  //       {/* Section 1 content */}
  //       <Credits />
  //     </section>
  //     <section id="gear" className="h-screen">
  //       {/* Section 2 content */}
  //       <Gear />
  //     </section>
  //     <section id="rates" className="h-screen">
  //       {/* Section 3 content */}
  //       <Rates />
  //     </section>
  //     <section id="about" className="h-screen">
  //       {/* Section 3 content */}
  //       <About />
  //     </section>
  //   </main>
  // </>

  // <>
  //   <header
  //     className={`w-full fixed top-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
  //       scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
  //     }`}
  //   >
  //     {/* Other header content */}
  //     <HamburgerMenu />
  //   </header>
  //   <main>
  //     <section id="credits" className="h-screen">
  //       {/* Section 1 content */}
  //       <Credits />
  //     </section>
  //     <section id="gear" className="h-screen">
  //       {/* Section 2 content */}
  //       <Gear />
  //     </section>
  //     <section id="rates" className="h-screen">
  //       {/* Section 3 content */}
  //       <Rates />
  //     </section>
  //     <section id="about" className="h-screen">
  //       {/* Section 3 content */}
  //       <About />
  //     </section>
  //   </main>
  // </>

  // <>
  //   <header
  //     className={`w-full fixed top-0 z-50 bg-white transition-transform duration-300 ease-in-out ${
  //       scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
  //     }`}
  //   >
  //     {/* Other header content */}
  //     <HamburgerMenu />
  //   </header>
  //   <main>
  //     <section id="credits" className="h-screen">
  //       {/* Section 1 content */}
  //       <Credits />
  //     </section>
  //     <section id="gear" className="h-screen">
  //       {/* Section 2 content */}
  //       <Gear />
  //     </section>
  //     <section id="rates" className="h-screen">
  //       {/* Section 3 content */}
  //       <Rates />
  //     </section>
  //     <section id="about" className="h-screen">
  //       {/* Section 3 content */}
  //       <About />
  //     </section>
  //   </main>
  // </>

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
        {/* Other header content */}
        {/* <nav>
          <button onClick={() => handleMenuItemClick("credits")}>
            Section 1
          </button>
          <button onClick={() => handleMenuItemClick("gear")}>Section 2</button>
          <button onClick={() => handleMenuItemClick("rates")}>
            Section 3
          </button>
        </nav> */}
        <HamburgerMenu onMenuItemClick={handleMenuItemClick} />
      </header>
      <main>
        <section id="credits" className="h-screen">
          {/* Section 1 content */}
          <Credits />
        </section>
        <section id="gear" className="h-screen">
          {/* Section 2 content */}
          <Gear />
        </section>
        <section id="rates" className="h-screen">
          {/* Section 3 content */}
          <Rates />
        </section>
        <section id="about" className="h-screen">
          {/* Section 3 content */}
          <About />
        </section>
      </main>
    </>
  );
}
