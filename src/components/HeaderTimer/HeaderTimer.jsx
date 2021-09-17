import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ReactCountdownClock from "react-countdown-clock";
import Logo from "../../assets/image/Logo.jpg";

const HeaderTimer = () => {
  let history = useHistory();
  let location = useLocation();
  const [path, setPath] = useState("");

  function handleEnd() {
    history.push("/timeup");
  }

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  return (
    <div className="flex w-full justify-between bg-blue-100 py-3 ">
      <div className="flex justify-start">
        <div className="flex ml-5 ">
          {path !== "/final" && (
            <ReactCountdownClock
              seconds={120}
              color="#000"
              alpha={0.3}
              size={90}
              onComplete={handleEnd}
            />
          )}
        </div>
        <h1 className="flex items-center ml-2 font-semibold text-gray-400">
          SURVEY Form
        </h1>
      </div>
      <img
        src={Logo}
        alt="pencil"
        className="flex items-center max-h-20 mr-2 pt-4 opacity-60"
      />
    </div>
  );
};

export default HeaderTimer;
