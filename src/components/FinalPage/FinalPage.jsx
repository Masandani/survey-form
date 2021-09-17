import React, { useEffect } from "react";
import BG from "../../assets/image/final.png"

const FinalPage = () => {
  useEffect(() => {
    let signUpForm = localStorage.getItem("signUpForm");
    signUpForm = JSON.parse(signUpForm);
    console.log("FirstName:", signUpForm.firstname);
    console.log("LastName:", signUpForm.lastname);
    console.log("Email:", signUpForm.email);

    let answerOne = localStorage.getItem("answerOne");
    answerOne = JSON.parse(answerOne);
    console.log("AnswerOne:", answerOne);

    let answerTwo = localStorage.getItem("answerTwo");
    answerTwo = JSON.parse(answerTwo);
    console.log("answerTwo:", answerTwo);

    let answerThree = localStorage.getItem("answerThree");
    answerThree = JSON.parse(answerThree);
    console.log("answerThree:", answerThree);
  }, []);

  return (
    <div className=" bg-w-full h-screen bg-gray-100">
      <div className="bg-auto bg-no-repeat bg-center h-full flex items-center justify-center flex-col" style={{ backgroundImage: `url(${BG})` }}>
        <div className="h-40">
          <h2 className="text-green-500 mb-12  text-5xl opacity-40"> THANK YOU </h2>
          <h2 className=" text-green-500  mb-12 font-normal text-3xl opacity-30"> for taking time and </h2>
          <h2 className="text-green-500  mb-12 font-normal text-3xl opacity-30"> filling up the form</h2>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
