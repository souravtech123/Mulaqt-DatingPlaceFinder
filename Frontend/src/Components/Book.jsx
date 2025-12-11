import React from "react";

const Book = () => {
  return (
    <div className="min-h-[60vh] bg-pink-100 flex items-center justify-center px-6">
      <div className="bg-gradient-to-r from-pink-500 to-purple-500 shadow-xl p-10 rounded-3xl max-w-2xl text-center border border-pink-300">

        <h2 className="text-4xl font-extrabold text-white mb-4">
          Plan Your Date With Us 💕
        </h2>

        <p className="text-white mb-6 text-lg">
          Your perfect date is just a click away!  
          Soon you’ll be able to browse dreamy places, pick the vibe you want,  
          and book the spot instantly — smooth, fast, and effortless.
        </p>

        <div className="mt-6">
          <button className="px-6 py-3 bg-white text-pink-500 rounded-full text-lg font-semibold shadow-md hover:bg-pink-700 transition">
            Book Now
          </button>
        </div>

        <div className="mt-4">
          <span className="animate-bounce text-pink-50 text-2xl font-semibold">
            Love is loading ❤️‍🔥
          </span>
        </div>

      </div>
    </div>
  );
};

export default Book;
