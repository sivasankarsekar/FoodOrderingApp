import React, { useState } from "react";
import Foodcart from "../FoodCart/foodcart";
import products from "../../assets/fake-data/products";
import bannerImage from "../../assets/images/banner-02.jpg";

const FoodList = () => {
  const [updatedFoodList, setUpdatedFoodList] = useState(products);
  const [searchtext, setSearchtext] = useState("");
const searchHandler=()=>{
  const filterdata=products.filter((food)=>food.title.toLowerCase().includes(searchtext.toLowerCase()));
    setUpdatedFoodList(filterdata);
}

const categoryHandler=(selectedOption:string)=>{
  if(selectedOption=='All'){
    setUpdatedFoodList(products);
  }
  else{
  const filterdata=products.filter((food)=>food.category.toLowerCase().includes(selectedOption.toLowerCase()));
    setUpdatedFoodList(filterdata);
  }
}
  return (
    <>
      <div className="flex flex-col">
        <div className="w-screen  h-64 shadow-2xl overflow-hidden relative">
          <img
            className=" absolute inset-0 h-full w-full object-cover"
            src={bannerImage}
          ></img>
          <div className=" absolute inset-0 bg-gray-900 bg-opacity-75"></div>
          <div className="flex h-full items-center justify-start relative">
            <h1 className=" text-3xl text-white tracking-wider m-3">
              All Foods
            </h1>
          </div>
        </div>
        <div className=" flex  justify-between items-baseline w-full m-5 px-2  ">
          <div className=" flex  items-start border-b-2 w-1/4 border p-1">
            <input
              className=" focus:outline-none  w-full"
              type="text"
              placeholder="i'm looking for..."
              value={searchtext}
              onChange={(e)=>{
                if(e.target.value.length==0){
                  setSearchtext('');
                  setUpdatedFoodList(products)
                }
                else{
                setSearchtext(e.target.value)
                }
              }}
            />
            <button onClick={searchHandler}>
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div> 
          <select className="mx-5 w-1/4 basis4/12 border-2 text-xs md:text-sm lg:text-lg  text-gray-400"  onChange={(e)=>categoryHandler(e.target.value)}>
            <option className=" " value="All">Default</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Bread">Bread</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  m-7 ">
          {updatedFoodList.map((product) => (
            <Foodcart
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image01={product.image01}
              image02={product.image02}
              image03={product.image03}
              category={product.category}
              desc={product.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
