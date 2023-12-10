import React from "react";
import ProductDetails from "../../utility/ProductDetail";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cartSlice";


const Foodcart: React.FC<ProductDetails> = ({
  id,
  title,
  price,
  image01,
  image02,
  image03,
  desc
}) => {

  const dispactch=useDispatch();

  const addToCart=()=>{
    dispactch(cartActions.addItem({
      id,title,image01,price
    }))

  }
  return (
    <div
      className="flex flex-col justify-between 
rounded overflow-hidden shadow-lg w-62 p-5"
    >
      <div className=" flex justify-center items-center">
        <img className="w-2/5" src={image01} alt="burger" />
      </div>

      <h2 className=" font-semibold text-sm py-2">{title}</h2>
      <div className="flex justify-between items-center py-4 ">
        <h2 className=" font-normal text-sm">{price}</h2>
        <button className="font-normal text-sm bg-appColor px-7 py-1 rounded-md text-white" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Foodcart;
