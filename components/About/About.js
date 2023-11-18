import React from "react";
import Card from "../Card/Card";

const About = () => {
  return (
    <>
      <div className="max-w-2xl mx-auto py-6">
        {/* <h1 className=" text-4xl m-4 font-bold mx-auto">About</h1> */}

        <h1 className="w-full text-4xl mb-4 font-bold text-center">ABOUT</h1>

        <Card className="mt-6">
        <p>
          Hey there, my name is Myriam Boisselle. I have 10+ years of experience
          in Field Sound Mixing and Recording. I was born in Mexico, raised in
          Miami, Florida and moved to San Francisco, CA (currently based) in
          2020. I have worked in several US states and other countries on an
          array of productions from the top floors of corporate buildings,
          lush wet jungles, dry hot deserts and everything in between. I
          have the proper gear for the right place in time and I am all ears to
          understanding your workflow as it relates to your data handling,
          sensitivity, time frame and gear requirements. <br/><br/>
          
          My first priority is to
          be on the same page, thereby flowing and accomplishing efficiently. I
          do this by keeping you in sync with clean dialogue, riding the waves
          of creation and morphing from a small footprint ENG package to a more
          rich sound package for Production Sound needs. Whether you are
          documenting stories that need a voice, co-creating inspirations, or
          bringing musings, dreams and missions to life, Im here and always
          grateful to be part of your production. May the magic begin! ​ <br/><br/>
          

          Along with my
          on location sound jobs, I have also become skilled in
          post-production as a dialogue editor, video editor, and M&E track
          sound designer (including foley creation). I am happy to say that
          knowing the end goal prepared me to be a more conscious Sound Mixer.
        </p>

        </Card>

      </div>
      <div className="max-w-2xl mx-auto py-6">

        {/* <h1 className="text-4xl m-4 font-bold mx-auto">Other Credits</h1> */}
        <h1 className="w-full text-4xl mb-4 font-bold text-center">OTHER CREDITS</h1>

        <Card className="mt-6">
        <ul className="leading-7 pb-4">
          <li>
            DWNTWN Concert Series | Director, CAM OP | Concert Series 
          </li>
          <li>Married At First Sight S4 | A1 | 2 days</li>
          <li>
            What Chilli Wants Season 2 | Assistant Camera | VH1 Episode 3 & 4{" "}
          </li>
          <li>MTV Hotel Black Eyed Peas | Assistant Camera | MTV </li>
          <li>18 & Over | Mothers Day Sobe Episode | Camera Operator | Mun2</li>
          <li>Promos | Editor | Mega TV | 3 weeks</li>
          <li>
            FIU MIB Program | Video & Sound Editor | FIU
          </li>
          <li>
            Next South Florida: Matisyahu | Camera Op & Editor |
            Miami
          </li>
          <li>
            Next South Florida: Major League Dreidel | Camera Op
            & Editor | Miami
          </li>
          <li>Luis Gonzalez - Political 30 sec spot | Editor</li>
          <li>Area Codes 305 • Pitbull | 2nd Camera Operator | InTheMo </li>
          <li>CHAT- Feature Film | Assistant Editor</li>
        </ul>
        </Card>

      </div>
    </>
  );
};

export default About;
