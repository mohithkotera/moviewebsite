import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const param = useParams();
  const name = param.id;
  console.log("name", name);
  const [filterData, setFilterData] = useState([]);

  const FilterData = async () => {
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
      setFilterData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FilterData();
  }, [name]);

  return (
    <div className="flex items-center h-screen">
      {filterData
        .filter((item) => item.original_title == name)
        .map((item, i) => (
          <div
            className="mx-10 rounded-md"
            style={{
              width: "100%",
              backgroundImage: `linear-gradient(  rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 40.57%, #000000 100%), url("https://image.tmdb.org/t/p/w500${item.poster_path}")`,
              backgroundSize: "contain",
              objectFit: "cover",
            }}
          >
            <div className="grid grid-cols-4 items-center gap-x-8">
              <div className="col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-full">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="h-full w-full rounded-l-md"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <p className="text-white font-semibold text-2xl py-4">
                  {item.original_title}(
                  {new Date(item.release_date).getFullYear()})
                </p>
                <p className="text-white">Release Date : {item.release_date}</p>
                <p className="text-white">
                  IMDB : {item.vote_average.toFixed(1)}/10
                </p>
                <p className="text-white">
                  Language : {item.original_language}
                </p>

                <div className="my-8">
                  <p className="text-white text-xl font-semibold">Overview</p>
                  <p className="text-white w-[800px]">{item.overview}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Movie;
