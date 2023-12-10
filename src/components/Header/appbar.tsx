import React, { useState } from "react";
import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Appbar: React.FC = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
  const [menuclicked, setMenuClicked] = useState<boolean>(true);

  return (
    <>
      {/* appbar */}
      <div className=" flex m-4 justify-between items-center">
        {/* logo */}
        <div className="">
          <img className="w-7 md:w-14 lg:w-18" src={logo} alt="logo" />
          <h5 className="flex justify-center items-center text-[9px] md:text-xl text-rose-600">
            Tasty Treat
          </h5>
        </div>
        {/* menu */}
        <div className="hidden md:block">
          <ul className="">
            <Link className="" to="/">
              Home
            </Link>
            <Link className="ml-2" to="/foodList">
              Foods
            </Link>
          </ul>
        </div>
        {/* cart + profile */}
        <div className="">
          <div
            className="visible  md:hidden lg:hidden xl:hidden"
            onClick={() => setMenuClicked(!menuclicked)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="hidden md:block">
            <Link to="/cart">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4  md:w-6 md:h-6 lg:w-6 lg:h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              <div className="absolute z-1  bg-appColor  rounded-full md:rounded-full text-white top-15 mx-2 px-1  md:px-2  md:top-8 md:mx-3 lg:px-2  lg:top-8 lg:mx-3">
                <p>{totalQuantity}</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile menu bar */}
      <div>
      <div className={menuclicked ? "block md:hidden" : "hidden md:hidden"}>
          <ul className="flex flex-col items-center">
            <Link className="" to="/">
              Home
            </Link>
            <Link className="" to="/foodList">
              Foods
            </Link>
            <Link className="" to="/cart">
              Cart
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Appbar;
