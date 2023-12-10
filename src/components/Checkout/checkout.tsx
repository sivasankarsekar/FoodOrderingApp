import React, { ReactNode } from "react";
import bannerImage from "../../assets/images/banner-02.jpg";
import { Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface FormModel {
  firstName: string;
  email: string;
  phoneNumber: number;
  country: string;
  city: string;
  postalCode: number;
}

const Checkout = () => {
  let navigate = useNavigate();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cartTotalAmount = useAppSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const totalAmount = cartTotalAmount + Number(shippingCost);
  return (
    <div className="flex flex-col ">
      <div className="w-full  h-32 md:h-64 shadow-2xl overflow-hidden relative bg-red-200">
        <img
          className=" absolute inset-0 h-full w-full object-cover"
          src={bannerImage}
        ></img>
        <div className=" absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex h-full items-center justify-start relative">
          <h1 className=" text-3xl text-white tracking-wider m-3">Checkout</h1>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row justify-start items-start ">
          <div className=" flex flex-col items-start w-full md:w-9/12 md:m-5  ">
            <h6 className="md:ml-4  font-bold">Shipping Address</h6>
            <Formik<FormModel>
              initialValues={{
                firstName: "",
                email: "",
                phoneNumber: 0,
                country: "",
                city: "",
                postalCode: 0
              }}
              validate={(values: FormModel) => {
                const errors: any = {};
                console.log(errors);
                if (!values.firstName) {
                  errors.firstName = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                    values.email
                  )
                ) {
                  errors.email = "Invalid email address";
                } else if (!values.phoneNumber) {
                  errors.phoneNumber = "Required";
                } else if (values.phoneNumber.toString().length != 10) {
                  errors.phoneNumber = "Invalid Phone Number";
                } else if (!values.country) {
                  errors.country = "Required";
                } else if (!values.city) {
                  errors.city = "Required";
                } else if (!values.postalCode) {
                  errors.postalCode = "Required";
                } else if (values.postalCode.toString().length != 6) {
                  errors.postalCode = "Invalid Postal Code";
                }
                console.log(errors);
                return errors;
              }}
              onSubmit={(values) => {
                navigate("/status");
              }}
            >
              {({
                handleSubmit,
                values,
                handleChange,
                isSubmitting,
                errors,
                touched
              }) => (
                <form
                  className=" flex flex-col items-start  w-full p-1"
                  onSubmit={handleSubmit}
                >
                  <div className=" flex flex-col items-start border-b-2 w-full mt-2 md:m-3">
                    <input
                      className=" focus:outline-none  w-full"
                      type="text"
                      placeholder="Enter your name"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.firstName && touched.firstName && (
                    <span className="text-red-400"> {errors.firstName}</span>
                  )}
                  <div className=" flex flex-col items-start border-b-2 w-full mt-2 md:m-3">
                    <input
                      className="focus:outline-none   w-full"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && touched.email && (
                    <span className="text-red-400"> {errors.email}</span>
                  )}
                  <div className=" flex flex-col items-start border-b-2 w-full mt-2 md:m-3">
                    <input
                      className="focus:outline-none   w-full"
                      type="number"
                      placeholder="Phone number"
                      name="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <span className="text-red-400"> {errors.phoneNumber}</span>
                  )}
                  <div className=" flex flex-col items-start border-b-2 w-full  mt-2 md:m-3">
                    <input
                      className=" focus:outline-none  w-full"
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={values.country}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.country && touched.country && (
                    <span className="text-red-400"> {errors.country}</span>
                  )}
                  <div className=" flex flex-col items-start border-b-2 w-full  mt-2 md:m-3">
                    <input
                      className=" focus:outline-none  w-full"
                      type="text"
                      placeholder="City"
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.city && touched.city && (
                    <span className="text-red-400"> {errors.city}</span>
                  )}
                  <div className=" flex flex-col items-start border-b-2 w-full  mt-2 md:m-3">
                    <input
                      className=" focus:outline-none  w-full"
                      type="number"
                      placeholder="Postal code"
                      name="postalCode"
                      value={values.postalCode}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.postalCode && touched.postalCode && (
                    <span className="text-red-400"> {errors.postalCode}</span>
                  )}
                  <div className="m-3 bg-appColor text-white px-3 py-1">
                    <button type="submit">Payment</button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
          <div className=" flex flex-col  items-start w-full md:w-3/12 m-1 md:m-5 bg-rose-200 rounded-md">
            <div className="flex  flex-col  w-full items-center justify-between">
              <h6 className="flex justify-between  w-full px-2 py-2">
                Subtotal:<span>${cartTotalAmount}</span>
              </h6>
              <h6 className="flex justify-between  w-full px-2">
                Shipping:<span>${shippingCost}</span>
              </h6>
              <div className="w-full py-5">
                <h5 className="flex justify-between  w-full px-2">
                  Total:<span>${totalAmount}</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
