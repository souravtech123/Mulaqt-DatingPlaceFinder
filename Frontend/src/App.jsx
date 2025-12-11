import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import Book from "./Components/Book";
import Footer from "./Components/Footer";

const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then(res => res.json())
      .then(data => setPlaces(data))
      .catch(err => console.log("Error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-red-100 p-6">
      <Navbar/>
      <Book/>
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Ranchi’s Romantic Places to Explore</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place) => (
          <Card key={place._id} place={place} />
        ))}  
      </div>
     
    <Footer/>
    </div>
  );
};

export default App;
