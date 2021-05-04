import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";

const Home = ({ posts }) => {
  return (
    <div>
      <span>home page</span>
    </div>
  );
};

export default Home;
