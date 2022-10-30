import React, { useState, useEffect } from "react";
import "../App.css";

function Repo() {
  const [repos, setRepos] = useState([]);

  // Fetching Repositories Data
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const api = await fetch("https://api.github.com/users/Oluwasemilogo/repos");
    const data = await api.json();
    setRepos(data);
  };
  console.log(repos);

  return (
    <div className="repos">
      <h1 className="repo-header">Repositories</h1>
      <ul className="repo-container">
        {repos?.map((repo, i) => (
          <li key={i} className="repo-card">
            <h4 className="repo-name">{repo.name}</h4>
            <p className="repo-description">{repo.description}</p>
            <div className="language">
              <img src={repo.languages_url} alt="" className="lang-logo" />
              <p className="repo-lang">{repo.language}</p>
            </div>
            <div className="date">
              <p>ID:{repo.id}</p>
              <p>{repo.size}Kb</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repo;
