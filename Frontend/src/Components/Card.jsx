import React from "react";

const Card = ({ place }) => {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md hover:shadow-2xl transition-all p-4">
      <img 
        src={place.image}
        alt={place.placeName}
        className="w-full h-44 object-cover rounded-md"
      />

      <h2 className="text-2xl font-bold mt-3 text-center text-red-500">{place.placeName}</h2>
      <p className="text-gray-600 text-xl font-semibold text-center text-pink-700 mt-1">Vibe : {place.vibe}</p>
      <p className="text-gray-600 text-xl font-bold mt-2">Budget: ₹{place.budget}</p>
      <p className="text-gray-700 text-xl mt-4">{place.description}</p>

      <p className="text-gray-500 text-sm text-center mt-2">⏰ Best Time: {place.timing}</p>
    </div>
  );
};

export default Card;
