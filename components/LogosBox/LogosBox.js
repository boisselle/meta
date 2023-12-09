import Image from 'next/image';
import React from 'react';

const LogosBox = () => {
    const images = [
        { path: '/images/natgeo_logo.png', size: 100 },
        { path: '/images/discover_logo.png', size: 100 },
        { path: '/images/showtime-seeklogo.com.svg', size: 100 },
        { path: '/images/Netflix-Logo.wine.svg', size: 100 },
        { path: '/images/ESPN_wordmark.svg', size: 90 },
        { path: '/images/Vox_logo.svg', size: 60 },
        { path: '/images/vice_logo.png', size: 100 },
        { path: '/images/pbs_logo.png', size: 80 },
        { path: '/images/goog_log.png', size: 100 },
        { path: '/images/Food_Network_Logo_2.svg', size: 60 },
        { path: '/images/bloomberg-1.svg', size: 100 },
        { path: '/images/uber_logo.png', size: 80 },
        { path: '/images/berkeley_logo.png', size: 100 },
        { path: '/images/vw_logo.png', size: 60 },
        { path: '/images/cnn_logo.png', size: 70 },
        { path: '/images/abc_logo.png', size: 60 },
        { path: '/images/NBC_logo.png', size: 50 },
        { path: '/images/cbs_logo.png', size: 80 },
        // { path: '/images/mtv_logo.png', size: 60 },

    ];

    return (
        <div className="flex justify-center"> {/* Full width container */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto justify-items-center"> {/* Horizontally centered grid */}
                {images.map((image, index) => (
                    <div key={index} className="flex justify-center items-center h-20"> {/* Fixed height for the container */}
                        <div style={{ width: `${image.size}px`, height: `${image.size}px` }} className="flex justify-center items-center">
                            <Image
                                src={image.path}
                                alt={`Image ${index}`}
                                layout="intrinsic"
                                width={image.size}
                                height={image.size}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogosBox;