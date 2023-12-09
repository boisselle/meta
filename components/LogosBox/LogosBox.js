import React from "react";
import Image from 'next/image'

const LogosBox = () => {

    const imagePaths = [
        '/images/natgeo_logo.png',
        '/images/discover_logo.png',
        '/images/showtime-seeklogo.com.svg',
        '/images/Netflix-Logo.wine.svg',
        '/images/ESPN_wordmark.svg',
        '/images/Vox_logo.svg',
        '/images/vice_logo.png',
        '/images/pbs_logo.png',
        '/images/goog_log.png',
        '/images/Food_Network_Logo_2.svg',
        '/images/bloomberg-1.svg',
        '/images/uber_logo.png',
        '/images/berkeley_logo.png',
        '/images/vw_logo.png',
        '/images/cnn_logo.png',
        '/images/abc_logo.png',
        '/images/NBC_logo.png',
        '/images/cbs_logo.png',
        '/images/mtv_logo.png',
    ];
    
    return (
        <div className="mt-2 sm:mx-6 lg:mx-28 flex flex-wrap">
            {imagePaths.map((path, idx) => (
                <div key={idx} className="w-1/4 sm:w-1/4 md:w-1/4 lg:w-1/4 p-2 flex items-center justify-center">
                    <img src={path} alt={`Image for ${path.split('/').pop().split('.')[0]}`} className="w-60 md:w-90 lg:w-90 xl:w-90" />
                </div>
            ))}
        </div>
    );
}

export default LogosBox;