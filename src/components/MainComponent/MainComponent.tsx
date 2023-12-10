import React, { useState } from "react";
import Hero from "../../assets/images/hero.png";
import Category_01 from "../../assets/images/category-01.png";
import Category_02 from "../../assets/images/category-02.png";
import Category_03 from "../../assets/images/category-03.png";
import Category_04 from "../../assets/images/category-04.png";
import Hamburger from "../../assets/images/hamburger.png";
import Pizza from "../../assets/images/pizza.png";
import Bread from "../../assets/images/bread.png";
import products from "../../assets/fake-data/products";
import Foodcart from "../FoodCart/foodcart";

const MainComponent = () => {
  const [updatedFoodList, setUpdatedFoodList] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const categoryHandler = (selectedOption: string) => {
    if (selectedOption == "All") {
      setUpdatedFoodList(products);
    } else {
      const filterdata = products.filter((food) =>
        food.category.toLowerCase().includes(selectedOption.toLowerCase())
      );
      setUpdatedFoodList(filterdata);
    }
  };
  return (
    // Home component
    <div className="flex flex-col ">
      {/* Home Banner */}
      <div className=" flex flex-col  justify-center items-center ">
        {/* banner title */}
        <div className="flex flex-wrap m-auto " >
          {/* banner description */}
          <div className="flex flex-col w-full md:w-1/2 px-10 justify-start items-start p-5  ">
            <h3 className=" font-bold">Easy way to make an order</h3>
            <div>
              <span className="text-appColor text-4xl font-bold">
                HUNGRY ?{" "}
              </span>
              <span className="font-bold text-4xl">Just wait </span>
            </div>
            <div>
              <span className="text-3xl font-bold">food at</span>
              <span className="text-appColor text-3xl font-bold">
                {" "}
                your door{" "}
              </span>
            </div>
            <div>
              <p className=" text-slate-700 text-thin text-xs md:text-sm my-4 text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur, eius, reiciendis accusantium vero quis voluptas quia
                officia magni, suscipit voluptatum veniam aut omnis tempora
              </p>
            </div>
            <div className="mt-5">
              <button className="text-white bg-appColor   text-xs md:text-lg px-3 rounded-md py-2 hover:bg-rose-300">
                Order now
              </button>
              <button className="text-appColor text-xs md:text-lg hover:bg-red-400 px-3 rounded-md py-2 bg-white border-appColor border-2 mx-5 hover:text-white">
                See all foods
              </button>
            </div>
          </div>
          {/* banner image */}
          <div className=" flex w-full md:w-1/2  my-2 justify-center items-center">
            <img className=" w-full md:w-1/2" src={Hero} alt="logo" />
          </div>
        </div>
        {/* category */}
        <div className=" w-full flex flex-col md:flex-row  justify-center p-1 items-center ">
          <div className="bg-orange-200  w-full md:w-1/2 lg:w-1/4 md:ml-2 flex justify-center items-center py-2 my-1 rounded-md">
            <span>
              {" "}
              <img className="w-10" src={Category_01} alt="logo" />
            </span>
            <span className="p-2">Fastfood</span>
          </div>
          <div className="bg-orange-200   w-full md:w-1/2  lg:w-1/4 md:ml-2 flex justify-center items-center py-2 my-2 rounded-md">
            <span>
              {" "}
              <img className="w-8" src={Category_02} alt="logo" />
            </span>
            <span className="p-2">Pizza</span>
          </div>
          <div className="bg-orange-200   w-full md:w-1/2 lg:w-1/4 md:ml-2 flex justify-center items-center py-2 my-2 rounded-md">
            <span>
              {" "}
              <img className="w-8" src={Category_03} alt="logo" />
            </span>
            <span className="p-2">Asian food</span>
          </div>
          <div className="bg-orange-200   w-full md:w-1/2 lg:w-1/4 md:ml-2 flex justify-center items-center py-2 my-2 rounded-md">
            <span>
              {" "}
              <img className="w-8" src={Category_04} alt="logo" />
            </span>
            <span className="p-2">Raw food</span>
          </div>
        </div>
      </div>

      {/* Popular foods  */}
      <div className=" flex flex-col  justify-center items-center">
        <h2 className="text-4xl font-bold my-10">Popular Foods</h2>
        <div className=" bg-orange-700 w-full  md:w-4/5  flex  justify-center p-3  items-center rounded-md">
          <div
            className={
              selectedCategory == "All"
                ? "bg-white rounded-md text-orange-700 mx-2 px-1 md:px-4"
                : "mx-2 px-1 md:mx-5"
            }
          >
            <span
              className={
                selectedCategory == "All"
                  ? "bg-white text-orange-700 text-xs md:text-lg md:px-4"
                  : "md:px-2 text-xs md:text-lg text-white"
              }
              onClick={() => {
                categoryHandler("All");
                setSelectedCategory("All");
              }}
            >
              All
            </span>
          </div>
          <div
            className={
              selectedCategory == "Burger"
                ? "bg-white rounded-md text-orange-700 mx-2 px-1 md:px-4 flex flex-row items-center"
                : "mx-2 px-1 md:mx-5 flex flex-row items-center"
            }
            onClick={() => {
              categoryHandler("Burger");
              setSelectedCategory("Burger");
            }}
          >
            <img className="w-4 h-4" src={Hamburger} alt="logo" />
            <span
              className={
                selectedCategory == "Burger"
                  ? "bg-white text-orange-700 px-1 text-xs md:text-lg  md:px-4"
                  : "px-1 md:px-2 text-xs md:text-lg text-white"
              }
            >
              Burger
            </span>
          </div>
          <div
            className={
              selectedCategory == "Pizza"
                ? "bg-white rounded-md text-orange-700 mx-2 px-1 md:px-4 flex flex-row items-center"
                : " px-1 mx-2 md:mx-5 flex flex-row items-center"
            }
            onClick={() => {
              categoryHandler("Pizza");
              setSelectedCategory("Pizza");
            }}
          >
            <span></span>
            <img className="w-4 h-4" src={Pizza} alt="logo" />
            <span
              className={
                selectedCategory == "Pizza"
                  ? "bg-white text-orange-700 px-1 text-xs md:text-lg md:px-4"
                  : "px-1 md:px-2 text-xs md:text-lg text-white"
              }
            >
              Pizza
            </span>
          </div>
          <div
            className={
              selectedCategory == "Bread"
                ? "bg-white rounded-md text-orange-700 mx-2 px-1 md:px-4 flex flex-row items-center"
                : "px-1 mx-2 md:mx-5 flex flex-row items-center"
            }
            onClick={() => {
              categoryHandler("Bread");
              setSelectedCategory("Bread");
            }}
          >
            <span></span>
            <img className="w-4 h-4" src={Bread} alt="logo" />
            <span
              className={
                selectedCategory == "Bread"
                  ? "bg-white text-orange-700 text-xs md:text-lg px-1 md:px-4"
                  : "px-1 md:px-2 text-xs md:text-lg text-white"
              }
            >
              Bread
            </span>
          </div>
        </div>
        <div className="w-4/5  ">
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
      </div>
    </div>
  );
};

export default MainComponent;
