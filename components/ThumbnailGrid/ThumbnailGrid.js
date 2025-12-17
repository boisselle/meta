// import React, { useState } from 'react';
// import LogosBox from '../LogosBox/LogosBox';

// export default function ThumbnailGrid({ videos }) {
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   return (
//     <div className="mx-4 mb-50 text-white"> {/* Adds 20px margin on both sides */}


//       {/* Grid Rendering Code */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto justify-items-center"> {/* 2 columns for xs to sm, 4 columns for md and up */}
//         {videos.map((video, index) => (
//           <div key={index} className="cursor-pointer">
//             <img
//               src={video.thumbnail}
//               alt="Thumbnail"
//               className="w-full h-auto transition duration-300 ease-in-out transform hover:scale-105 rounded-md 2xl:max-w-[400px]"
//               onClick={() => setSelectedVideo(video)}
//             />
//             <p className="text-center text-md font-bold mt-2 italic">{video.description}</p>
//           </div>
//         ))}

//         {selectedVideo && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//         <div className="relative" style={{ width: '80vw', paddingTop: 'calc(80vw * 9 / 16)' }}>
//           <iframe
//             className="absolute top-0 left-0 w-full h-full"
//             src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>

//           {/* Close Button */}
//           <button
//             onClick={() => setSelectedVideo(null)}
//             className="absolute top-3 right-3 text-black font-bold bg-pink-300 rounded-full h-16 w-16 flex items-center justify-center border-4 border-black"
//             style={{ borderRadius: '35px', top: '-30px', right: 'calc(-10px - 2.5%' }}
//           >
//             X
//           </button>
//             </div>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }

import React, { useState } from 'react';
import LogosBox from '../LogosBox/LogosBox';

export default function ThumbnailGrid({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="mx-4 mb-50 text-white">
      {/* Grid Rendering Code */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-auto justify-items-center">
        {videos.map((video, index) => (
          <div key={index} className="cursor-pointer w-full">
            {/* Wrapper div with fixed aspect ratio */}
            <div className="relative w-full" style={{ paddingTop: '56.25%' /* 9/16 * 100 for 16:9 */ }}>
              <img
                src={video.thumbnail}
                alt="Thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105 rounded-md 2xl:max-w-[400px]"
                onClick={() => setSelectedVideo(video)}
              />
            </div>
            <p className="text-center text-md font-bold mt-2 italic">{video.description}</p>
          </div>
        ))}

        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative" style={{ width: '80vw', paddingTop: 'calc(80vw * 9 / 16)' }}>
              {/* <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
              <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
              title={selectedVideo.title || selectedVideo.name || "YouTube video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label={`Video player: ${selectedVideo.title || selectedVideo.name || "YouTube video"}`}
            />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 text-black font-bold bg-pink-300 rounded-full h-16 w-16 flex items-center justify-center border-4 border-black"
                style={{ borderRadius: '35px', top: '-30px', right: 'calc(-10px - 2.5%)' }}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}