import { data } from "autoprefixer";
import { useEffect, useState } from "react";

const dataFetching = async () => {
  try {
    response = await fetch("https://api.github.com/users/karimhassan1");
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const GitHub = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <h1>GitHub Data is coming</h1>
    </div>
  );
};
export default GitHub;
