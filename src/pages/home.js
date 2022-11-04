import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "../img/bg.png";
import ScrollImage from "../img/scroll.png";
import "./meramankiya.css";
import axios from "axios"


function Home() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      summ: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone:Yup.number()
      .required("Phone no is required"),
      summ:Yup.string()
      .required("Summoner name is required"),
    }),

    onSubmit: async (values) => {
      console.log("form submitted");
      try{
      const data = {
        name: values.name,
        phoneNumber: values.phone,
        summ: values.summ,
        email: values.email
      }
      await axios.post("https://clash-website-backend.herokuapp.com/register", data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert("Registered Successfully");
    }catch(e){
      alert("An Error Occured");
    }
    },
  });

  return (
    <div>
      <div className="fixed top-0 left-0 w-screen h-screen items-center flex justify-center z-0 invisible lg:visible">
        <img alt="" src={Image} className="w-full" />
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen items-center flex justify-center z-0 visible lg:invisible ass ">
        <img alt="" src={ScrollImage} className="h-screen " />
      </div>

      <div
        className="absolute w-full overflow-scroll lg:overflow-auto h-[70vh]  lg:h-auto"
        z-100
      >
        <div className=" lg:py-5 items-center flex justify-center ">
          <form
            onSubmit={formik.handleSubmit}
            className=" opacity-[95%] flex rounded-lg w-5/6 lg:w-1/2 font-latoRegular sexy lg:py-[5rem] px-5"
          >
            <div className="flex-1 text-gray-700 p-5 lg:p-20">
              <h1 className="text-5xl pb-2 ">TAG CLASH</h1>
              <p className="text-lg  text-gray-500 w-8/10">
                Register for league of legends Tag-Clash tournament . 
                <div className="text-red-500">Only EUW Account Allowed.</div>
              </p>
              <div className="mt-6">
                <div className="pb-4">
                  <label
                    htmlFor="name"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.name && formik.errors.name
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : "Name"}
                  </label>
                  <p className="text-sm font-latoBold text-red-400 "></p>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="email"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.email && formik.errors.email
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : "Email"}
                  </label>
                  <p className="text-sm font-latoBold text-red-400 "></p>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="phone"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.phone && formik.errors.phone
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.phone && formik.errors.phone
                      ? formik.errors.phone
                      : "Phone"}
                  </label>
                  <p className="text-sm font-latoBold text-red-400 "></p>
                  <input
                    className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                    type="text"
                    name="phone"
                    placeholder="Enter your Phone no."
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="pb-4">
                  <label
                    htmlFor="summ"
                    className={`block font-latoBold text-sm pb-2 ${
                      formik.touched.summ && formik.errors.summ
                        ? "text-red-400"
                        : ""
                    } `}
                  >
                    {formik.touched.summ && formik.errors.summ
                      ? formik.errors.summ
                      : "Summoner Id"}
                  </label>
                  <p className="text-sm font-latoBold text-red-400 "></p>
                  <input
                    className="border-2  border-gray-500 p-2 rounded-md w-full focus:border-teal-500 focus:ring-teal-500 "
                    type="text"
                    name="summ"
                    placeholder="Example#EUW"
                    onChange={formik.handleChange}
                    value={formik.values.summ}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-gray-700  font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
