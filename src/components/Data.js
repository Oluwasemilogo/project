import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DetailsContext } from "./Context";
function Data() {
  let { data } = useParams();
  const { repos } = useContext(DetailsContext);

  // commits.
  const [commits, setCommits] = useState([]);
  useEffect(() => {
    getCommits();
  }, []);
  const getCommits = async () => {
    const api = await fetch(
      "https://api.github.com/repos/Oluwasemilogo/A-simple-user-validation-page/commits",
      {
        method: "get",
        headers: new Headers({
          Authorization: "Bearer " + "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",
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      }
    );
    const data = await api.json();
    setCommits(data);
  };
  console.log(commits);
  return (
    <div className="details-container">
      <h1>Repository Details.</h1>
      <h4>{data}</h4>
      {/* <h4>Number of Commits:{commits.length}</h4> */}
    </div>
  );
}

export default Data;
