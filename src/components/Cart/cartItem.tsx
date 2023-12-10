import React from "react";
import { ListGroupItem } from "reactstrap";
import productImg from "../../assets/images/product_01.1.jpg";
import Product from "../../utility/Product";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/slice/cartSlice";

const CartItem: React.FunctionComponent<Product> = ({
  id,
  title,
  image01,
  price,
  quantity,
  totalPrice
}: Product) => {
  const dispatch = useDispatch();

  const deleteItem = (event: { stopPropagation: () => void }) => {
    dispatch(cartActions.deleteItem(id));
    event.stopPropagation();
  };

  const incrementItem = (event: { stopPropagation: () => void }) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01
      })
    );
    event.stopPropagation();
  };

  const decreaseItem = (event: { stopPropagation: () => void }) => {
    dispatch(cartActions.removeItem(id));
    event.stopPropagation();
  };

  return (
    <div className=" flex flex-col my-2 ">
      <div className="flex justify-between items-center p-1 ">
        {/* Image + Count */}
        <div className=" flex ">
          <div className=" w-10">
            <img src={image01} alt="product-img" />
          </div>

          <div className=" flex mx-2 items-center justify-between gap-1">
            <div className="flex flex-col items-start">
              <h6 className=" font-semibold text-sm"> {title} </h6>
              <p className=" flex items-center gap-12 text-xs ">
                {quantity}x{" "}
                <span className="text-base font-semibold text-red-600">
                  ${price}
                </span>
              </p>
              <div className=" flex justify-evenly mt-3 bg-red-100 px-5 py-1 rounded-md">
                <span className="mr-4" onClick={incrementItem}>
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
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </span>
                <span>{quantity}</span>
                <span className="ml-4" onClick={decreaseItem}>
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
                      d="M18 12H6"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Item Close Icon */}
        <div className="self-center" onClick={deleteItem}>
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
      </div>
    </div>
  );
};

export default CartItem;
