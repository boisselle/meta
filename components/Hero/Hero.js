import Image from "next/image";
import Head from "next/head";
import LogosBox from '../LogosBox/LogosBox'
import DiagonalLines from "../DiagonalLines/DiagonalLines";

const Hero = ({ imageUrl, children }) => {
  const companies = [
    'CNN',
    'Vice',
    'ABC',
    'NBC',
    'CBS',
    'PBS',
    'National Geographic',
    'MTV',
    'Discovery Channel',
    'UC Berkeley',
    'Uber',
    'Volkswagen',
  ];

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-zinc-100">
        {/* Here is the main card container for the content */}

        <div className="pt-72 p-8 mx-8">

          {/* Here is the flex container*/}
          {/* <div className="flex flex-col rounded-l-xl"> */}

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
              <h2>SAN FRANCISCO & LA +</h2>
              <h2>NYC | MIAMI | MEXICO</h2>

              <div className="space-y-1 py-4">
                <p className="text-xs">GLOBAL ENTRY & TSA PRECHECK READY</p>
              </div>

              <p className="pb-8">
                Proficient in mixing and recording double system sync sound with
                Arri, Sony, Red, Canon, Black Magic & DSLRs.
              </p>

              <div className="mt-20">Some companies I've worked with:</div>
              <div className="mt-8 flex flex-wrap justify-between">

              <div>
                < LogosBox />
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
};

export default Hero;
