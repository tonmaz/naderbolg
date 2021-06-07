import { useRouter } from "next/router";

import { getPost, listPosts } from "@src/graphql/queries";
import parse from "html-react-parser";
import { usePost } from "../../../hooks/fetchPosts";
import { API, withSSRContext } from "aws-amplify";

export default function Post({ prepost }) {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = usePost(getPost, id, prepost);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (isLoading) return "loading...";
  const post = data.data.getPost;

  return (
    <div>
      <h1 className="text-5xl mt-4 font-semibold tracking-wide">
        {post.title}
      </h1>
      <p className="text-sm font-light my-4">by {post.username}</p>
      <div className="mt-8">
        {/*<ReactMarkdown className="prose" children={post.content} />*/}

        {parse(post.content)}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const postData = await SSR.API.graphql({
    query: listPosts,
  });
  const paths = postData.data.listPosts.items.map((post) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const { id } = params;

  const postData = await SSR.API.graphql({
    query: getPost,
    variables: { id },
  });
  return {
    props: {
      prepost: postData.data.getPost,
    },
  };
}
