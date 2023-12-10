import React from "react";

import logo from "../../assets/images/res-logo.png";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <div className="flex flex-col bg-red-100 md:p-5">
      <div className="flex flex-col md:flex-row ">
        <div className=" flex flex-col w-full md:w-1/2 lg:w-1/4 items-start p-2 ml-5">
          <img className="w-10 md:w-14 lg:w-18 " src={logo} alt="logo" />
          <div>
            <h5 className=" mt-2 bg-yello-100">Tasty Treat</h5>
          </div>
          <div>
            <p className=" text-slate-700 text-thin text-sm md:text-sm my-4 text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, eius, reiciendis accusantium vero quis voluptas quia
              officia magni, suscipit voluptatum veniam aut omnis tempora
            </p>
          </div>
        </div>
        <div className=" flex flex-col w-full md:w-1/2 lg:w-1/4 items-start p-2 ml-5 ">
          <div className="">
            <h2 className="flex  font-bold ">Delivery Time</h2>
            <h1 className="mt-5 text-sm">Sunday - Thursday</h1>
            <h1 className="text-sm">10:00am - 11:00pm</h1>
          </div>
          <div className="">
            <h2 className=" font-bold"></h2>
            <h1 className="mt-5 text-sm">Friday - Saturday</h1>
            <h1 className="flex justify-start items-start text-sm ">
              Off day{" "}
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-start ml-5 ">
          <div className="">
            <h2 className="flex justify-start items-start font-bold">
              Contact
            </h2>
            <h1 className=" flex justify-start items-start mt-5 text-sm">
              Location: ZindaBazar , Sylhet-3100,
            </h1>
            <h1 className="flex justify-start items-start text-sm">
              Bangladesh
            </h1>
          </div>
          <div className="">
            <h2 className=" font-bold"></h2>
            <h1 className="flex justify-start items-start mt-5 text-sm">
              Phone: 01712345678
            </h1>
            <h1 className="flex justify-start items-start text-sm">
              Email: example@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/4 items-start ml-5 mt-5 md:mt-0">
          <h5 className="font-bold">Newsletter</h5>
          <h1 className=" text-sm mt-2">Subscribe</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5  md:ml-5 items-center ">
        <div className="flex w-full md:w-1/2 justify-start">
          <h1 className=" text-xs text-appColor">
            Copyright-2022, website made by Muhibur Rahman. All Right Reserved
          </h1>
        </div>
        <div className="flex items-center ml-2 p-2 md:justify-center w-full md:w-1/2">
          <div className="flex ">
          <h1 className=" text-sm ">
            Follow:
          </h1>
          </div>
          <div className="flex">
          <img className="w-4 md:w-6 lg:w-8 ml-4" src={logo} alt="logo" />
          <img className="w-4 md:w-6 lg:w-8 ml-4" src={logo} alt="logo" />
          <img className="w-4 md:w-6 lg:w-8 ml-4" src={logo} alt="logo" />
          <img className="w-4 md:w-6 lg:w-8 ml-4" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
