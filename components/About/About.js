import React from "react";
import Card from "../Card/Card";

const About = () => {
  return (
    <>
      <div className="leading-7 pb-4">
        {/* <h1 className=" text-4xl m-4 font-bold mx-auto">About</h1> */}

        <h1 className="w-full text-4xl mb-4 font-bold text-center">ABOUT</h1>

        <Card className="mt-6">
        <p>
        Hey there, my name is Myriam Boisselle. I have 10+ years of experience in Field Sound Mixing and Recording. I was born in Mexico, raised in Miami, Florida and moved to San Francisco, CA (currently based) in 2020. I have worked in several US states and other countries on an array of productions from the top floors of corporate buildings, lush wet jungles, dry hot deserts and everything in between. I have the proper gear for the right place and time, and I&apos;m all ears to understanding your workflow as it relates to your data handling, sensitivity, time frame and gear requirements. 
        <br /><br />
        My first priority is to be on the same page as the crew, helping to execute on the vision of the director and producers. I do this by keeping it all in sync with clean dialogue, riding the waves of creation and morphing from a small footprint ENG package to a more rich sound package for Production Sound needs. Whether you are documenting stories that need a voice, in-house confidential projects, co-creating inspirations, or bringing musings, dreams and missions to life, I&apos;m here and always grateful to be part of your production. May the magic begin!
        <br /><br />
        Along with my &quot;on location&quot; sound jobs, I also became skilled in post-production dialogue editor, video editor, and M&E track sound designer (including foley creation). Developing these capabilites prepared me to be a more conscious and effective Sound Mixer.
        </p>

        </Card>

      </div>

      {/* <div className="leading-7 pb-4">

        <h1 className="w-full text-4xl mb-4 font-bold text-center">OTHER CREDITS</h1>

        <Card className="mt-6 text-center leading-7">
        <ul className=" pb-2 space-y-2">
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

      </div> */}
    </>
  );
};

export default About;
