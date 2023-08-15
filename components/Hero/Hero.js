import Image from "next/image";
import Head from "next/head";

const Hero = ({ imageUrl, children }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-zinc-100">
        {/* Here is the main card container for the content */}

        <div className="p-8 mx-8">
          {/* Here is the flex container*/}
          <div className="flex flex-col rounded-l-xl">
            {/* Name / Title */}
            <div className="text-center max-w-lg mx-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl pb-2">
                MYRIAM BOISSELLE
              </h1>

              <p className="text-2xl md:text-2xl font-light whitespace-nowrap">
                LOCATION SOUND MIXER
              </p>
              <p className="text-2xl md:text-2xl font-light"> & RECORDIST</p>
            </div>

            {/* Location, proficiencies */}

            <div className="text-center mx-6 max-w-md py-8">
              <h2>Based in San Francisco, CA.</h2>

              <div className="space-y-2 py-4">
                <p>Will travel. See Rates for more information.</p>
                <p>
                  I regularly work throughout Northern California, as well as
                  Los Angeles, Miami, New York City, Mexico, and more!
                </p>
                <p className="text-xs">GLOBAL ENTRY & TSA PRECHECK READY</p>
              </div>

              <p className="pb-8">
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
