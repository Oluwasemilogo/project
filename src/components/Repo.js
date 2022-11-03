import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DetailsContext } from "./Context";
import "../App.css";

function Repo() {
  const { repos } = useContext(DetailsContext);
  // const [repos, setRepos] = useState([]);

  // // Fetching Repositories Data
  // useEffect(() => {
  //   getRepos();
  // }, []);

  // const getRepos = async () => {
  //   const api = await fetch("https://api.github.com/user/repos", {
  //     method: "get",
  //     headers: new Headers({
  //       Authorization: "Bearer " + "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",
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     }),
  //   });

  //   const data = await api.json();
  //   setRepos(data);
  // };
  // useEffect(() => {
  //   console.log(repos);
  // });
  // Fetch language img
  return (
    <div className="repos">
      <h1 className="repo-header">Repositories</h1>
      <ul className="repo-container">
        {repos?.map((repo, i) => (
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
                <img src={repo.languages_url} alt="" className="lang-logo" />
                <p className="repo-lang">{repo.language}</p>
              </div>
              <div className="date">
                <p>ID:{repo.id}</p>
                <p>{repo.size}Kb</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Repo;
