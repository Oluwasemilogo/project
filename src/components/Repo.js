import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailsContext } from "./Context";
import "../App.css";

function Repo() {
  const { repos } = useContext(DetailsContext);

  const [Repos, setRepos] = useState([]);
  // const { page } = useParams();
  // console.log(page);

  const getRepos = async (val) => {
    const reps = await fetch(
      `https://api.github.com/users/Oluwasemilogo/repos?per_page=8&page=${val}`,
      {
        // method: "get",
        // headers: new Headers({
        //   Authorization: "Bearer " + "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",
        //   "Content-Type": "application/x-www-form-urlencoded",
        //   "User-Agent": "request",
        //   Accept: "application/vnd.github.v3+json",
        // }),
      }
    );
    const data = await reps.json();
    setRepos(data);
  };

  useEffect(() => {
    getRepos(1);
  }, []);
  return (
    <div className="repos">
      <h1 className="repo-header">Repositories</h1>
      <ul className="repo-container">
        {Repos[0] &&
          Repos.map((repo, i) => (
            <Link
              to={`/repos/${repo.name}`}
              key={i}
              style={{
                color: "inherit",
                textDecoration: "inherit",
              }}
            >
              <li className="repo-card">
                <h4 className="repo-name">{repo.name}</h4>
                <p className="repo-description">{repo.description}</p>
                <div className="language">
                  <p className="repo-lang">{repo.language}</p>
                </div>
                <div className="other">
                  <p className="repo-other">ID:{repo.id}</p>
                  <p className="repo-other">{repo.size}Kb</p>
                </div>
              </li>
            </Link>
          ))}
        
      </ul>
        <div className="buttons">
        <button  onClick={() => getRepos(1)} className="previous">Previous</button>
          <button onClick={() => getRepos(2)} className="next">Next</button>
        </div>
    </div>
  );
}

export default Repo;
