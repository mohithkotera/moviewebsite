import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { IoBookmark } from "react-icons/io5";
import Header from "../components/Header";

const Wishlist = () => {
  const [wishmovie, setWishmovie] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("wishlist"));
    setWishmovie(data);
  }, []);

  return (
    <div className="favcontainer h-screen">
      <Header />
      <div>
        <p className="text-center text-4xl font-semibold text-white py-8">
          WishLists
        </p>
      </div>
      <div className="grid grid-cols-5 gap-6">
        {wishmovie?.map((item, i) => (
          <div className="col-span-1 flex justify-center" key={i}>
            <MovieCard data={item} icon={<IoBookmark color="red" />} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
