import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import questionsList from "../../questionsList/questionsList.json";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";

const PageTwo = () => {
  let history = useHistory();
  function handleClickOne() {
    history.push("/1");
  }
  const handleClickThree = () => {
    history.push("/3");
  };
  const questions = questionsList;
  const [answerQuestion2, setAnswerQuestion2] = useLocalStorage(
    "answerTwo",
    ""
  );
  const handleChangeTextArea = (event) => {
    setAnswerQuestion2(event.target.value);
    submitedForm();
  };

  const [Submited, setSubmited] = useState(false);
  const submitedForm = () => {
    setSubmited(true);
  };

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
      <div className="w-full h-full bg-gray-100 py-1 flex">
        <div className="md:w-1/4 py-5 h-70 mx-auto  bg-white mt-6 mb-10">
          <div className="flex flex-row justify-center py-3">
            <h1 className="flex items-center my-2 text-lg text-gray-400">
              Question 2/
            </h1>
            <p className="flex items-end font-medium text-xs text-red-300 my-2">
              {questions.length}
            </p>
          </div>
          <div className="flex justify-start pl-4 py-2 text-lg font-normal">
            {questions[1].questionText}
          </div>
          <div className="formControl">
            <textarea
              className="shadow appearance-none border  w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200 my-10"
              onChange={handleChangeTextArea}
              placeholder="Enter your Answer"
            ></textarea>
          </div>
          <div className="py-8">
            <button
              className="rounded bg-green-300 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
              type="button"
              onClick={handleClickOne}
            >
              Back
            </button>
            <button
              className=" bg-green-300 rounded hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
              type="button"
              onClick={handleClickThree}
              disabled={!Submited}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default PageTwo;
