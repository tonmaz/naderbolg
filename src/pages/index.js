import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Amplify, API, Auth, withSSRContext } from "aws-amplify";

const Home = ({ posts }) => {
  return (
    <div className="bg-yellow-500 w-3/4 h-10 text-center">
      <span>home page</span>
      <div>{process.env.NEXT_PUBLIC_APP_STAGE}</div>
    </div>
  );
};

export default Home;
