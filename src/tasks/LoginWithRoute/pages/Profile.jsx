import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const params = useParams();
  return (
    <div>
      {params.email
        ? `Welcome ${params.username}, Your email is ${params.email}.`
        : "Please login to access this content."}
    </div>
  );
};

export default Profile;
