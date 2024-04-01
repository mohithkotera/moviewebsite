import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa6";
import MovieCard from "./MovieCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filterbyname, setFilterByname] = useState();

  const [favorites, setFavorites] = useState(() => {
    // Retrieve favorites from local storage, or return an empty array if not found
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    // Retrieve favorites from local storage, or return an empty array if not found
    const storedwishlists = localStorage.getItem("wishlist");
    return storedwishlists ? JSON.parse(storedwishlists) : [];
  });

  const NavigateTo = (id) => {
    navigate(`/movie/${id}`);
  };

  const handlechange = (e, val) => {
    e.stopPropagation();
    const presentFavIndex = favorites.findIndex((item) => item.id === val.id);
    if (presentFavIndex !== -1) {
      // Item is already in favorites, remove it
      const updatedFavorites = [...favorites];
      updatedFavorites.splice(presentFavIndex, 1);
      setFavorites(updatedFavorites);
      toast.warn("Removed Successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      
    } else {
      // Item is not in favorites, add it
      setFavorites((prevFavorites) => [...prevFavorites, val]);
          toast.success("Added Successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
    }
  };

  const handlewishlist = (e, val) => {
    e.stopPropagation();
    const presentFavIndex = wishlist.findIndex((item) => item.id === val.id);
    if (presentFavIndex !== -1) {
      // Item is already in wishlist, remove it
      const updatedwishlist = [...wishlist];
      updatedwishlist.splice(presentFavIndex, 1);
      setWishlist(updatedwishlist);
    } else {
      // Item is not in wishlist, add it
      setWishlist((prevWishlist) => [...prevWishlist, val]);
    }
  };

  const isFavorite = (id) => {
    return favorites.some((item) => item.id === id);
  };

  const isWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const getMovies = async () => {
    try {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWE4MTU4NzNlZWI5MjVmMzFhOGExODdmZjA3YTNlYiIsInN1YiI6IjY2MGE0MDVlNWFhZGM0MDE3YzYyYzkyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v6c0hj2LJgej0EuAjEp-kRXdqFymdblyJnJoRNt8YjE",
        },
      };

      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );
      const result = response.data.results;
      console.log(result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    const filterdatabyname = data.filter((item, i) =>
      item.original_title.includes(filterbyname)
    );
    if (filterdatabyname.length > 0 && filterbyname?.length > 0) {
      return setData(filterdatabyname);
    } else {
      getMovies();
    }
  }, [filterbyname]);

  return (
    <div>
      <div className="flex justify-center items-center gap-x-4 lg:max-w-md mx-auto mt-28">
        <input
          onChange={(e) =>
            setFilterByname(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
          type="search"
          placeholder="Search movie name..."
          className="bg-transparent text-white outline-none border py-3 rounded-full px-3 w-full"
        />
        <div className="bg-transparent border px-5 py-5 rounded-full">
          <FaFilter color="white" />
        </div>
      </div>

      <div className="py-14 mx-10">
        <div className="text-white my-7 text-3xl">TOP MOVIES</div>
        <div className="grid grid-cols-5 gap-x-6 gap-y-8">
          {data.map((item, index) => (
            <div key={index} onClick={() => NavigateTo(item.original_title)}>
              <MovieCard
                data={item}
                icon={
                  isFavorite(item.id) ? (
                    <IoMdHeart
                      color="red"
                      size={22}
                      onClick={(e) => handlechange(e, item)}
                    />
                  ) : (
                    <CiHeart
                      color="white"
                      onClick={(e) => handlechange(e, item)}
                      size={22}
                    />
                  )
                }
                iconwishlist={
                  isWishlist(item.id) ? (
                    <IoBookmark
                      color="red"
                      onClick={(e) => handlewishlist(e, item)}
                    />
                  ) : (
                    <IoBookmarkOutline
                      color="white"
                      onClick={(e) => handlewishlist(e, item)}
                    />
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
