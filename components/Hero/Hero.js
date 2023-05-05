import Image from "next/image";
import Head from "next/head";

const Hero = ({ imageUrl, children }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-zinc-100">
        {/* Here is the main card container for the content */}

        <div className="p-8 mx-8">
          {/* Here is the flex container*/}
          <div className="flex flex-col md:flex-row rounded-l-xl">
            {/* Name / Title */}
            <div className="text-center md:text-right max-w-lg mx-10">
              <h1 className="text-5xl md:text-6xl lg:text-8xl">
                MYRIAM BOISSELLE
              </h1>

              <p className="text-2xl md:text-2xl">LOCATION SOUND MIXER</p>
              <p className="text-2xl md:text-2xl"> & RECORDIST</p>
            </div>

            {/* Location, proficiencies */}

            <div className="text-center md:text-left mx-6 max-w-md">
              <h2>SAN FRANCISCO, LA, NYC, MIAMI, MEXICO, +</h2>
              <p>GLOBAL ENTRY & TSA PRECHECK READY</p>
              <p>
                Proficient in mixing and recording double system sync sound with
                Arri, Sony, Red, Canon, Black Magic & DSLRs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
