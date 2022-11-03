import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Data() {
  let { data } = useParams();
  console.log(data);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const api = await fetch(
      "https://api.github.com/users/Oluwasemilogo/repos",
      {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + "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",
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }
    );
    const data = await api.json();
    setRepos(data);
  };
  console.log(repos);
  return (
    <div>
      <h1>Data of each</h1>
      <h4>{data}</h4>
    </div>
  );
}

export default Data;
