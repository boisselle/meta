import React from "react";
import Card from "../Card/Card";

const Gear = () => {
  return (
    <Card className="space-y-6 shadow-solid-black">
      {/* <h1 className=" text-4xl font-bold mx-auto"> Gear</h1> */}
      <h1 className=" text-4xl font-bold pb-2 text-center"> Gear</h1>
      <ul>
        <h2 className="text-md font-bold">MIXER RECORDER</h2>
        <li>x01 - Sound Devices 833</li>
        <li>x01 - Sound Devices Mix Pre 10</li>
        <li>x01 - Sound Devices Mix Pre 6</li>
      </ul>

      <ul>
        <h2 className="text-md font-bold">MICROPHONES</h2>
        <li>x02 - Schoeps MiniCMIT Shotgun</li>
        <li>x02 - Schoeps CMC6 MK41</li>
        <li>x02 - DPA 4070 Micro Shotguns</li>
        <li>x02 - Sennheiser MKH 50’s</li>
      </ul>

      <ul>
        <h2 className="text-md font-bold">LAVALIERS</h2>
        <li>x03 - DPA 4061 (Brown, Beige, White)</li>
        <li>x02 - DPA 6060 (Black)</li>
        <li>x02 - DPA 4061 (White, Beige)</li>
        <li>x01 - COUNTRYMAN (Black)</li>
      </ul>

      <ul>
        <h2 className="text-md font-bold">TRANSMITTERS</h2>
        <li>x08 - Lectrosonics SMQV’s</li>
        <li>x02 - Lectrosonics HMA’s (plug)</li>
      </ul>

      <ul>
        <h2 className="text-md font-bold">RECEIVERS</h2>
        <li>x02 - Lectrosonics DSR4</li>
      </ul>

      <ul>
        <h2 className="text-md font-bold">TIMECODE &amp; SYNC</h2>
        <li>X05 - Tentacle (camera sync)</li>
        <li>X01 - Ambient Timecode Slate</li>
      </ul>

      <ul>
        <h2 className="text-md font-bold">BOOM POLES &amp; SUSPENSION</h2>
        <li>x01 - Ambient Pole 4140 (17 Feet)</li>
        <li>x01 - Ambient Quick Pole</li>
        <li>X01 - K-tek Pole</li>
        <li>X02 - Cinela osix Shockmounts</li>
        <li>
          x01 - Cinela Cosi Wind Protection with shock mounts &amp; protection
        </li>
      </ul>

      <ul>
        <li className="text-md font-bold">CLIENT MONITORING (IFB)</li>
        <li>x02 IFB TX + x12 IFB Headsets</li>
      </ul>

      <ul>
        <li className="text-md font-bold">EXPENDABLES</li>
        <li>Week long jobs @ $60 a week</li>
      </ul>
    </Card>
  );
};

export default Gear;
