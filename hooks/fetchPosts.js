import useSWR from "swr";
import { API } from "aws-amplify";

export const usePosts = (query) => {
  const { data, error } = useSWR(query, fetcher);
  console.log(data);
  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const fetcher = async (url) =>
  await API.graphql({
    query: url,
  });

export const usePost = (query, id, post) => {
  const { data, error } = useSWR([query, id], getPostbyId, {
    initialdata: post,
  });

  return {
    data: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const getPostbyId = async (url, id) => {
  return API.graphql({
    query: url,
    variables: { id },
  });
};
