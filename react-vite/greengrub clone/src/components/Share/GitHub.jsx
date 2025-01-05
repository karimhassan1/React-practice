import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer.jsx";
import GitHubBody from "./GitHubBody.jsx";

const dataFetching = async (setFetchData) => {
  try {
    const response1 = await fetch("https://api.github.com/users/karimhassan1");
    const jsData = await response1.json();
    setFetchData(jsData);
  } catch (error) {
    console.log(error.message);
  }
};

const GitHub = () => {
  const [fetchData, setFetchData] = useState(false);
  useEffect(() => {
    dataFetching(setFetchData);
  }, []);
  {
    return fetchData ? <GitHubBody param={fetchData} /> : <Shimmer />;
  }
};
export default GitHub;
