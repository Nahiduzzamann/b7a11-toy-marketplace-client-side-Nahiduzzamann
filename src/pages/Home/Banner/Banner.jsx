import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <Carousel 
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      stopOnHover={true}
      transitionTime={500}
      showIndicators={true}
      showStatus={false}
      className="w-full mx-auto relative"
    >
      <div className='h-52'>
        <img src="https://images.unsplash.com/photo-1644564795151-fcb96a1c36c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Banner 1" className='object-cover'/>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 p-4 h-52">
        K Toys (Japan) F6 friction drive Fire Engine
        </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1654155917394-cc476faca27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Banner 2" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 p-4">
        Police car toy
        </div>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1508112669284-33e37093fc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80" alt="Banner 3" className="object-cover" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 p-4">
        GEM "Super racer" n°42, lithographed sheet metal toy
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;

