import React from "react";
import { motion } from "framer-motion";
import useForm from "../../hooks/useForm/useForm";
import validate from "../../util/validateInfo/validateInfo";
import "./formSignup.css";

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const pageTransition = {
    duration: 0.5,
  };
  return (
    <motion.div
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      <div className="w-full h-full flex-col bg-gray-100 py-20 flex">
        <h1 className="flex mx-auto justify-self-center h-6 text-gray-600 font-bold text-3xl opacity-60 font-mono my-5">
        User Survey Form
        </h1>
        

        <div className="md:w-1/4 mx-auto py-6 flex-col">
          <form
            className="bg-white shadow-md  px-8 pt-8 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <h1 className="pb-5 text-lg uppercase font-extrabold text-gray-400  ">
              Get Start With Us today
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="text-gray-500 text-sm font-bold mb-2 flex self-start"
              >
                First Name
              </label>
              <input
                id="firstname"
                type="text"
                name="firstname"
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                placeholder="Enter your First Name"
                value={values.firstname}
                onChange={handleChange}
              />
              {errors.firstname && <p>{errors.firstname}</p>}
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className=" text-gray-500 text-sm font-bold mb-2 flex self-start "
              >
                Last Name
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                placeholder="Enter your Last Name"
                value={values.lastname}
                onChange={handleChange}
              />
              {errors.lastname && <p>{errors.lastname}</p>}
            </div>
            <div className="form-inputs">
              <label
                htmlFor="email"
                className="text-gray-500 text-sm font-bold mb-2 flex self-start"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-300"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <button
              className="rounded bg-green-300 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default FormSignUp;
