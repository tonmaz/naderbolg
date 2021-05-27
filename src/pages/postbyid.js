// pages/my-posts.js
import { useState, useEffect } from "react";
import Link from "next/link";
import { API, Auth } from "aws-amplify";
import { getMessage, getPost } from "../graphql/queries";
import parse from "html-react-parser";

export default function MyPosts() {
  const [post, setPost] = useState([]);
  const id = "729f3346-e9c6-4dd2-abd2-5421140317ec";

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
        My Post
      </h1>
      <div>
        <h1 className="text-5xl mt-4 font-semibold tracking-wide">ryytryj</h1>
        <p className="text-sm font-light my-4">by </p>
        <button onClick={() => fetchPosts(id)}>show data</button>
        <div className="mt-8">
          {/*<ReactMarkdown className="prose" children={post.content} />*/}
          fdg
          {post.content && parse(post.content)}
        </div>
      </div>
    </div>
  );
}
