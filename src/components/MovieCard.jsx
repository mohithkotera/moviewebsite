import React, { useEffect, useState } from "react";
import cardimg from "../assets/Images/Frame.png";
import { CiStar } from "react-icons/ci";
import { CiHeart, CiBookmark } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const MovieCard = ({ data,  icon, iconwishlist }) => {
  return (
    <div className=" bg-transparent w-fit cursor-pointer">
      <div className="h-60 min-w-60 max-w-72">
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="h-full w-full"
        />
      </div>
      <div className="px-3 py-2 grid gap-y-2 bg-black">
        <div className="flex justify-between">
          <p
            className="text-white"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "normal",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
              fontWeight: "600",
              width: 120,
            }}
          >
            {data.original_title}
          </p>
          <p className="text-white">{data.release_date}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex text-white">
            IMDB:{data.vote_average.toFixed(1)}/10
          </div>
          <div className="flex items-center">
            {icon}
            {iconwishlist}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
