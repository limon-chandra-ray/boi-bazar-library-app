
import ReactPlayer from 'react-player/youtube';

const Video = () => {
  // Sample video dat

  return (
   

     <div className="container mx-auto p-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
        {/* Video Section */}
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Library Management Video List</h1>
     
       <ReactPlayer className="mr-12" url='https://youtu.be/rW2r5uStgG0?si=6PYMhILLzu07ZXFY' />
    
    </div>

        {/* Text Section */}
        <div className=" mx-4  flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">The Impact of Libraries on Our Lives</h1>
          <p className="text-gray-700 mb-6">
            Libraries play a crucial role in shaping our communities and enriching our lives. They
            provide access to knowledge, support learning, and foster a love for reading and
            discovery.
          </p>
          <p className="text-gray-700 mb-6">
            Whether its access to a wide range of books, educational programs, or a quiet space for
            contemplation, libraries contribute significantly to the well-being and development of
            individuals and society.
          </p>
          <p className="text-gray-700">
            Join us in exploring the profound impact that libraries have on our lives and
            communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
