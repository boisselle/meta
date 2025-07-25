import React from "react";
import Card from "../Card/Card";

const Rates = () => {
  return (
    <div className="leading-7 pb-4">
        <h1 className="w-full text-4xl mb-4 font-bold text-center">RATES</h1>

        <Card className="space-y-6 shadow-solid-black">
          {/* <h1 className="text-4xl font-bold pb-2 text-center">Rates</h1> */}
          <ul>
            <h2 className="text-md font-bold">BASIC BAG - $450/DAY</h2>
            <li>x01 Sound Devices 833 Recorder</li>
            <li>x01 Boom microphone kit</li>
            <li>x02 Wireless Transmitters with DPA Lavs</li>
          </ul>
          <ul>
            <h2 className="text-md font-bold">INTERVIEW CART 1 - $590/DAY</h2>

            <li>x01 Sound Devices 833 Recorder</li>
            <li>x01 Boom microphone kit</li>
            <li>x02 Wireless Transmitters with DPA Lavs</li>
            <li>x01 Wireless scratch track</li>
            <li>x01 Timecode Camera Sync Box</li>
            <li>x01 Cart, Stand, Expendables</li>
          </ul>
          <ul>
            <h2 className="text-md font-bold">INTERVIEW CART 2 - $750/DAY</h2>

            <li>x01 Sound Devices 833 Recorder - Cart Based</li>
            <li>x01 Boom microphone kit</li>
            <li>x02 Wireless Transmitters with DPA Lavs</li>
            <li>x01 Wireless scratch track</li>
            <li>x01 Timecode Camera Sync Box</li>
            <li>x01 Timecode Smart Slate</li>
            <li>x01 IFB TX + x04 IFB Headsets</li>
            <li>x01 Cart, Stand, Expendables</li>
          </ul>
          <ul>
            <h2 className="text-md font-bold">À LA CARTE - EACH PER DAY:</h2>

            <li>Sync box - $65/Day</li>
            <li>Timecode Smart Slate - $75/Day</li>
            <li>Wireless scratch track - $50/Day</li>
            <li>Transcription MP3s/AAC - $50/Day</li>
            <li>IFB TX + x01 IFB Headset - $65/Day</li>
            <li>IFB TX + x04 IFB Headsets - $170/Day</li>
            <li>Additional IFB Headset - $35/Day</li>
            <li>Camera HOP (Stereo) - $150/Day</li>
            <li>Camera HOP (mono) - $75/Day</li>
            <li>Stereo microphone kit - $100/Day</li>
            <li>Ambisonic microphone kit - $200/Day</li>
            <li>Boundary Mic - $50/Day</li>
            <li>Stick/Reporter Mic - $50/Day</li>
            <li>Wireless boom mic kit - $100/Day</li>
            <li>Wireless TX/RX/LAV mic kit - $100/Day</li>
            <li>Wireless handheld mic kit - $75/Day</li>
          </ul>
          <ul>
            <h2>GO PRO 11 BLACK KIT - $75/Day</h2>

            <li>1 TB Sandisk Extreme Mini SD Card</li>
            <li>3 Enduro Batteries</li>
            <li>Dual Charger</li>
            <li>Magnetic, Glass, Bike, &amp; Clamp Mount</li>
            <li>usb c cable</li>
            <li>case</li>
          </ul>
        </Card>
    </div>
  );
};

export default Rates;
