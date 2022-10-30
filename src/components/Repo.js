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
      <h1>List of Repos</h1>
      <ul className="repo-container">
        {repos?.map((repo, i) => (
          <li key={i} className="repo-card">
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <p>{repo.language}</p>
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
