import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { IoMdHeart } from "react-icons/io";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Favroites = () => {
  const [favmovie, setFavmovie] = useState([]);
  const navigate = useNavigate();

   const NavigateTo = (id) => {
     navigate(`/movie/${id}`);
   };

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
          <div
            className="col-span-1 flex justify-center"
            key={i}
            onClick={() => NavigateTo(item.original_title)}
          >
            <MovieCard data={item} icon={<IoMdHeart color="red" size={22} />} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favroites;
