import { useEffect, useState } from "react";

const ConditionalLoginWithSideEffect = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    console.log("You are loggedin");
  });
  useEffect(() => {
    alert("Page Loaded");
  }, []);
  useEffect(() => {
    alert(isLoggedIn ? "User LoggedIn" : "User Log Out ");
  }, [isLoggedIn]);
  return (
    <div>
      <h1>{isLoggedIn ? "User LoggedIn" : "User Log Out "}</h1>
      <button
        onClick={() => {
          setIsLoggedIn((p) => !p);
        }}
      >
        {isLoggedIn ? "Log out" : "Log In"}
      </button>
    </div>
  );
};

export default ConditionalLoginWithSideEffect;
