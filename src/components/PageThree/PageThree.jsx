import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import questionsList from "../../questionsList/questionsList.json";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";


const PageThree = () => {

  let history = useHistory();
  function handleClickTwo() {
    history.push("/2");
  }
  const questions = questionsList;
  const [answerQuestion3, setAnswerQuestion3] = useLocalStorage("answerThree", "");
  const [answereSubmitQ3, setAnswereSumitQ3] = useState(false);
  const handleAnswer = (index) => {
    setAnswerQuestion3(questions[2].answerOptions[index].answerText);
    setAnswereSumitQ3(true);
  };
  const handleClickTotal = () => {
    history.push("/final");
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
        <div className="md:w-1/4 mx-auto py-5  bg-white my-2">
          <div className="flex flex-row justify-center py-3">
            <h1 className="flex items-center my-2 text-lg text-gray-400">
              Question 3/
            </h1>
            <p className="flex items-end font-medium text-xs text-red-300 my-2">
              {questions.length}
            </p>
          </div>
          <div className="flex justify-start pl-4 py-2 text-lg font-normal">
            {questions[2].questionText}
          </div>

          <div className="flex flex-col">
            {questions[2].answerOptions.map((answerOptions, index) => (
              <button
                className="pl-3 rounded w-1/2 flex mx-auto my-2 py-2 bg-gray-300 hover:bg-gray-400 text-white focus:bg-blue-200 focus:outline-none"
                onClick={() => handleAnswer(index)}
                key={`answer-${answerOptions.id}`}
              >
                {answerOptions.answerText}
              </button>
            ))}
          </div>

          <button
            className="rounded bg-green-300 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
            type="button"
            onClick={handleClickTwo}
          >
            Back
          </button>
          <button
            className="rounded bg-green-300  hover:cursor-pointer text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2 disabled:opacity-50"
            type="button"
            onClick={handleClickTotal}
            disabled={!answereSubmitQ3}
          >
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
};
export default PageThree;
