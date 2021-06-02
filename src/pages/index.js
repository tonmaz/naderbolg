import { useState, useEffect } from "react";
import Link from "next/link";
import { API } from "aws-amplify";
import { getMessage, listPosts, sellerData } from "../graphql/queries";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetchPosts();
  }, []);
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }
  useEffect(() => {
    fetchMessage();
    fetchSeller();
  }, []);
  async function fetchMessage() {
    const lambMessage = await API.graphql({
      query: getMessage,
    });
    setMessage(lambMessage.data);
  }
  async function fetchSeller() {
    const Data = await API.graphql({
      query: sellerData,
    });
    console.log(Data);
  }

  function connect() {
    // async function getUser() {
    //   try {
    //     const response = await axios.get(
    //       "https://sellercentral-europe.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.69a50f4e-2ab0-4bdc-ad39-053396c104eb&version=beta"
    //     );
    //     return response.data;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    //
    // const connectData = getUser();
    // console.log(connectData);
    // return connectData;
  }

  // console.log(message);
  return (
    <div>
      <a
        type="button"
        className="inline-flex items-center py-2 px-3 text-xs font-medium text-white bg-blue-600 rounded border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        href="https://sellercentral-europe.amazon.com/apps/authorize/consent?application_id=amzn1.sp.solution.69a50f4e-2ab0-4bdc-ad39-053396c104eb&version=beta"
      >
        Connect with Amazon here
      </a>
      <h1 className="mt-6 mb-2 text-3xl font-semibold tracking-wide"> Posts</h1>
      {posts.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div className="pb-4 border-b cursor-pointer border-gray-300	mt-8">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-gray-500">Author: {post.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
