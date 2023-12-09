import Image from "next/image";
import Head from "next/head";
import LogosBox from '../LogosBox/LogosBox'
import DiagonalLines from "../DiagonalLines/DiagonalLines";
import Card from "../Card/Card";


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
      <div className="flex items-center justify-center bg-white">
        {/* Here is the main card container for the content */}

        <div className="pt-40 p-2 mx-8">
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

              <p className="mb-6">
                Proficient in mixing and recording double system sync sound with
                Arri, Sony, Red, Canon, Black Magic & DSLRs.
              </p>

              <div></div>
              <a href="tel:+13055025390" className="text-blue-400 hover:text-blue-600 font-bold">305-502-5390</a>
              <br></br>
              <a href="mailto:metamorphsound@gmail.com?subject=Interested in working with you!" className="text-blue-400 hover:text-blue-700 font-bold">metamorphsound@gmail.com</a>

              <div className="flex justify-center items-center space-x-4 pt-4">
                <a href="www.instagram.com/metamorphsound/" className="block">
                  <Image 
                    src="/images/Instagram_Glyph_Black.png" 
                    alt="Instagram" 
                    width={32} // Adjust as needed
                    height={32} // Adjust as needed
                    objectFit="cover" 
                  />
                </a>
                <a href="https://www.imdb.com/name/nm12717002/" className="block">
                  <Image 
                    src="/images/imdb_rectangle_black.png" 
                    alt="IMDb" 
                    width={64} // Adjust as needed
                    height={32} // Adjust as needed
                    objectFit="cover" 
                  />
                </a>
                <a href="https://www.linkedin.com/in/myriamsound/" className="block">
                  <Image 
                    src="/images/LinkedIn-Black-128.png" 
                    alt="LinkedIn" 
                    width={32} // Adjust as needed
                    height={32} // Adjust as needed
                    objectFit="cover" 
                  />
                </a>
    </div>

              <h1 className="pt-8 italic">Some highlights of my work</h1>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
