import React, { useEffect } from "react";
import BG from "../../assets/image/final.png"

const FinalPage = () => {
  useEffect(() => {
    let signUpForm = localStorage.getItem("signUpForm");
    signUpForm = JSON.parse(signUpForm);
    console.log("FirstName:", signUpForm.firstname);
    console.log("LastName:", signUpForm.lastname);
    console.log("Email:", signUpForm.email);

    let answer1 = localStorage.getItem("answer1");
    answer1 = JSON.parse(answer1);
    console.log("Answer1:", answer1);

    let answer2 = localStorage.getItem("answer2");
    answer2 = JSON.parse(answer2);
    console.log("Answer2:", answer2);

    let answer3 = localStorage.getItem("answer3");
    answer3 = JSON.parse(answer3);
    console.log("Answer3:", answer3);

    let answer4 = localStorage.getItem("answer4");
    answer4 = JSON.parse(answer4);
    console.log("Answer4:", answer4);

    let answer5 = localStorage.getItem("answer5");
    answer5 = JSON.parse(answer5);
    console.log("Answer5:", answer5);

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
