import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { IoMdHeart } from "react-icons/io";
import Header from "../components/Header";

const Favroites = () => {
  const [favmovie, setFavmovie] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("favorites"));
    setFavmovie(data);
  }, []);

  return (
    <div className="favcontainer h-screen">
      <Header />
      <div>
        <p className="text-center text-4xl font-semibold text-white py-8">
          Favorites Movies
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {favmovie?.map((item, i) => (
          <div className="col-span-1 flex justify-center" key={i}>
            <MovieCard data={item} icon={<IoMdHeart color="red" size={22} />} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favroites;
