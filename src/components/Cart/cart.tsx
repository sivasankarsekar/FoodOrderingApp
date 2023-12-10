import React from "react";
import { ListGroup } from "reactstrap";
import CartItem from "./cartItem";
import { Link, useNavigate } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Cart = () => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const listOfCartItems = useAppSelector((state) => state.cart.cartItems);
  const totalAmount = useAppSelector((state) => state.cart.totalAmount);

  let navigate = useNavigate();
  return (
    <div className="fixed  top-0 left-0 w-full h-full bg-black opacity-98 z-0 ">
      <ListGroup className=" mx-auto absolute top-0 right-0 w-full md:w-[400px] h-full bg-white  z-[9999999] ">
        <div className="flex flex-col">
          {/* close */}
          <div onClick={() => navigate(-1)}>
            <span>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          {/* cart list */}
          {listOfCartItems.length !==0 ? <div className="overflow-y-auto h-[42rem]">
           
           {listOfCartItems.map((item) => (
             <CartItem
               key={item.id}
               id={item.id}
               title={item.title}
               price={item.price}
               quantity={item.quantity} image01={item.image01} totalPrice={item.totalPrice}
             
             />
           ))}
         </div> : <h4>No items in cart</h4>}
          
          {/* subtotal */}
          <div className="  absolute bottom-0 w-full flex items-center justify-center py-4 text-white bg-red-900">
           
          {totalAmount!==0 ?  <Link to="/checkout" > <h6>
              Subtotal amount: <span>$ {totalAmount} </span>
            </h6>
            </Link> :<h6>
              Subtotal amount: <span>$ {totalAmount} </span>
            </h6> }
          </div>
        </div>
      </ListGroup>
    </div>
  );
};

export default Cart;
