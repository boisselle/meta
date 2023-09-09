import React from "react";
import Image from 'next/image'

const LogosBox = () => {

    const imagePaths = [
        '/images/abc_logo.png',
        '/images/berkeley_logo.png',
        '/images/cnn_logo.png',
        '/images/cbs_logo.png',
        '/images/discover_logo.png',
        '/images/mtv_logo.png',
        '/images/natgeo_logo.png',
        '/images/NBC_logo.png',
        '/images/pbs_logo.png',
        '/images/uber_logo.png',
        '/images/vice_logo.png',
        '/images/vw_logo.png'
    ];
    
    return (
        <div className="mt-2 flex flex-wrap justify-between">
            {imagePaths.map((path, idx) => (
                <div key={idx} className="w-1/2 sm:w-1/4 md:w-1/4 lg:w-1/6 p-4">
                    <img src={path} alt={`Image for ${path.split('/').pop().split('.')[0]}`} className="w-20 h-20 object-contain" />
                </div>
            ))}
        </div>
    );
}

export default LogosBox;