// pages/my-posts.js
import { useState, useEffect } from "react";
import Link from "next/link";
import { API, Auth } from "aws-amplify";
import { getMessage, getPost } from "../graphql/queries";

export default function MyPosts() {
  const [post, setPost] = useState([]);
  const id = "729f3346-e9c6-4dd2-abd2-5421140317ec";
  useEffect(() => {
    fetchPosts(id);
  }, []);
  async function fetchPosts(id) {
    const { username } = await Auth.currentAuthenticatedUser();
    const postData = await API.graphql({
      query: getMessage,
      variables: { postId: id },
    });
    setPost(postData.data.getMessage);
  }

  console.log(post);
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">
        My Posts
      </h1>
      {/*{posts.map((post, index) => (*/}
      {/*  <Link key={index} href={`/posts/${post.id}`}>*/}
      {/*    <div className="cursor-pointer border-b border-gray-300	mt-8 pb-4">*/}
      {/*      <h2 className="text-xl font-semibold">{post.title}</h2>*/}
      {/*      <p className="text-gray-500 mt-2">Author: {post.username}</p>*/}
      {/*    </div>*/}
      {/*  </Link>*/}
      {/*))}*/}
      <div className="cursor-pointer border-b border-gray-300	mt-8 pb-4">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="text-gray-500 mt-2">Author: {post.username}</p>
      </div>
    </div>
  );
}
