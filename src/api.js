import useSWR from "swr";
import axios from "axios";

const API_URL = process.env.REACT_APP_API;

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const useFrog = () => {
  const { data, error } = useSWR(API_URL, fetcher);

  console.log("FETCHING FROG FROM", API_URL);

  return {
    data,
    error,
    loading: !data && !error,
  };
};
