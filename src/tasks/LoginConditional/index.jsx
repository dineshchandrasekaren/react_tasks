import { useState } from "react";
import LoginStatus from "./LoginStatus";

function LoginConditionalParent() {
  const [user, setUser] = useState({ name: "Manu", isLoggedIn: false });

  return (
    <div>
      <h2>User Login Status</h2>
      <LoginStatus user={user} />
      <button
        onClick={() =>
          setUser((Prev) => ({ ...Prev, isLoggedIn: !Prev.isLoggedIn }))
        }
      >
        {user.isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default LoginConditionalParent;
