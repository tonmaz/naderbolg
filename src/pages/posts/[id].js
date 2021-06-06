import { useRouter } from "next/router";
import "../../configureAmplify";
import { getPost } from "@src/graphql/queries";
import parse from "html-react-parser";
import { usePost } from "../../../hooks/fetchPosts";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = usePost(getPost, id);

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

// export async function getStaticPaths() {
//   const postData = await API.graphql({
//     query: listPosts,
//   });
//   const paths = postData.data.listPosts.items.map((post) => ({
//     params: { id: post.id },
//   }));
//   return {
//     paths,
//     fallback: true,
//   };
// }
//
// export async function getStaticProps({ params }) {
//   const { id } = params;
//
//   const postData = await API.graphql({
//     query: getPost,
//     variables: { id },
//   });
//   return {
//     props: {
//       post: postData.data.getPost,
//     },
//   };
// }
