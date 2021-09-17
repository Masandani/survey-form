import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import questionsList from "../../questionsList/questionsList.json";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";


const PageOne = () => {
  let history = useHistory();
  function handleClickTwo() {
    history.push("/2");
  }
  function handleClickHome() {
    history.push("/");
  }

  const questions = questionsList;
  const [answerQuestion1, setAnswerQuestion1] = useLocalStorage("answerOne", "");
  const [answereSubmitQ1, setAnswereSumbitQ1] = useState(false);
  const handleAnswer = (index) => {
    setAnswerQuestion1(questions[0].answerOptions[index].answerText);
    setAnswereSumbitQ1(true);
  };


  const pageTransition = {
    duration: 0.5,
  };

  return (
    <motion.div
      key="1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={pageTransition}
    >
      <div className="w-full h-full bg-gray-100 py-1 flex">
        <div className="md:w-1/4 mx-auto py-5  bg-white my-5">
          <div className="flex flex-row justify-center py-3">
            <h1 className="flex items-center my-2 text-lg text-gray-400">
              Question 1/
            </h1>
            <p className="flex items-end font-medium text-xs text-red-300 my-2">
              {questions.length}
            </p>
          </div>
          <div className="flex justify-start pl-4 py-2 text-lg font-normal">
            {questions[0].questionText}
          </div>
          <div className="flex flex-col">
            {questions[0].answerOptions.map((answerOptions, index) => (
              <button
                className="pl-3 rounded w-1/2 flex mx-auto my-2 py-2 bg-gray-300 hover:bg-gray-400 text-white focus:bg-blue-200 focus:outline-none"
                onClick={() => handleAnswer(index)}
                key={`answer-${answerOptions.id}`}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>

          <div className="py-5">
            <button
              className="rounded bg-green-300 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
              type="button"
              onClick={handleClickHome}
            >
              Back
            </button>
            <button
              disabled={!answereSubmitQ1}
              className=" bg-green-300 rounded hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
              type="button"

              onClick={handleClickTwo}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PageOne;
