import React from "react";
import { useHistory } from "react-router-dom";
import Bimage from "../../assets/image/bg.png"

const Start = () => {
  let history = useHistory();

  function handleClickStart() {
    history.push("/1");
  }
  return (
    <div className="w-screen h-screen bg-gray-100">
      <h1 className="text-gray-400 text-2xl font-medium pt-10">Please answer the questions carefully.</h1>
      <img src={Bimage} alt="" className="opacity-10 mx-auto" />
      <button
        className="rounded bg-green-300 hover:bg-green-500 hover:cursor-pointer text-white font-bold py-2.5 px-12 mt-4  focus:outline-none focus:shadow-outline"
        type="button"
        onClick={handleClickStart}
      >
        START
      </button>
    </div>
  );
};

export default Start;
