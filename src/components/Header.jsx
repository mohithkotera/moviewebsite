import React from "react";
import { Link, useLocation,useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation();

  return (
    <div className="w-full  px-6 py-4">
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="text-[32px] font-bold text-red-500 cursor-pointer" onClick={()=>navigate('/')}>Movies</h1>
        <div className="flex gap-x-7">
          <Link
            to="/"
            className={`text-lg text-white font-semibold ${
              location.pathname === "/"
                ? "border-b-2 border-red-600 font-bold"
                : ""
            } `}
          >
            Home
          </Link>
          <Link
            to="/favroites"
            className={`text-lg text-white font-semibold ${
              location.pathname === "/favroites"
                ? "border-b-2 border-red-600 font-bold"
                : ""
            } `}
          >
            Favorites
          </Link>
          <Link
            to="/wishlist"
            className={`text-lg text-white font-semibold ${
              location.pathname === "/wishlist"
                ? "border-b-2 border-red-600 font-bold"
                : ""
            } `}
          >
            Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
