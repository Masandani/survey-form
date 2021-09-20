import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";
import { motion } from "framer-motion";
import questionsList from "../../data/questionsList/questionsList.json";

const Questions = ({ match }) => {
  const questions = questionsList;
 
  const question = questions.find((item) => {
    return match.params.id === item.id;
  });
  
  const [answerQuestion, setAnswerQuestion] = useLocalStorage(
    `answer${question.id}`,
    ""
  );
  const [answerSubmited, setAnswerSubmited] = useState(false);
  const handleAnswer = (index) => {
    setAnswerQuestion(question.answerOptions[index].answerText);
    setAnswerSubmited(true);
  };

  let history = useHistory();
  function handleClickNext() {
    if (parseInt(question.id) === questions.length) {
      history.push("/final");
    } else {
      history.push(`/questions/${parseInt(question.id) + 1}`);
    }
  }
  function handleClickBack() {
    if (parseInt(question.id) > 1) {
      history.push(`/questions/${parseInt(question.id) - 1}`);
    } else {
      history.push("/");
    }
  }

  const handleChangeTextArea = (event) => {
    setAnswerQuestion(event.target.value);
    setAnswerSubmited(true);
  };

  const pageTransition = {
    duration: 0.5,
  };

  return (
    <>
      {match.isExact && (
        <>

          {question.type === "fourOptions" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={pageTransition}
            >
              <div className="w-full h-full bg-gray-100 py-1 flex">
                <div className="md:w-1/4 mx-auto py-5  bg-white my-5">
                  <div className="flex flex-row justify-center py-3">
                    <h1 className="flex items-center my-2 text-lg text-gray-400">
                      Question {question.id}/
                    </h1>
                    <p className="flex items-end font-medium text-xs text-red-300 my-2">
                      {questions.length}
                    </p>
                  </div>
                  <div className="flex justify-start pl-4 py-2 text-lg font-normal">
                    {question.questionText}
                  </div>
                  <div className="flex flex-col">
                    {question.answerOptions.map((answerOptions, index) => (
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
                      onClick={handleClickBack}
                    >
                      Back
                    </button>
                    <button
                      disabled={!answerSubmited}
                      className=" bg-green-300 rounded hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
                      type="button"
                      onClick={handleClickNext}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {question.type === "descriptiveQuestion" && (
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
                      Question {question.id}/
                    </h1>
                    <p className="flex items-end font-medium text-xs text-red-300 my-2">
                      {questions.length}
                    </p>
                  </div>
                  <div className="flex justify-start pl-4 py-2 text-lg font-normal">
                    {question.questionText}
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
                      onClick={handleClickBack}
                    >
                      Back
                    </button>
                    <button
                      className=" bg-green-300 rounded hover:cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2"
                      type="button"
                      onClick={handleClickNext}
                      disabled={!answerSubmited}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          {question.type === "sixOptions" && (
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
                      Question {question.id}/
                    </h1>
                    <p className="flex items-end font-medium text-xs text-red-300 my-2">
                      {questions.length}
                    </p>
                  </div>
                  <div className="flex justify-start pl-4 py-2 text-lg font-normal">
                    {question.questionText}
                  </div>
                  <div className="flex flex-col">
                    {question.answerOptions.map((answerOptions, index) => (
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
                    onClick={handleClickBack}
                  >
                    Back
                  </button>
                  <button
                    className="rounded bg-green-300  hover:cursor-pointer text-white font-bold py-2.5 px-6 mt-8  focus:outline-none focus:shadow-outline mx-2 disabled:opacity-50"
                    type="button"
                    onClick={handleClickNext}
                    disabled={!answerSubmited}
                  >
                    Next
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </>
      )}
      ;
    </>
  );
};

export default Questions;
