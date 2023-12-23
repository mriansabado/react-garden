import React from 'react';



const Hero = () => {
    function Print() {
        console.log('print this');
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">BarBlend Guru</h1>
      <p className="text-lg md:text-xl mb-8">
        Shake, Stir, Sip - Become a Blending Maestro!
      </p>
      <button onClick={Print} className="bg-white text-blue-500 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
