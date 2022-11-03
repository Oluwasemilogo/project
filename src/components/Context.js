import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const DetailsContext = createContext([]);
const DetailsProvider = ({ children }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    getRepos();
  }, []);

  const getRepos = async () => {
    const api = await fetch(
      "https://api.github.com/users/Oluwasemilogo/repos",
      {
        method: "get",
        // headers: new Headers({
        //   Authorization: "Bearer " + "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",
        //   "Content-Type": "application/x-www-form-urlencoded",
        //   "User-Agent": "request",
        //   Accept: "application/vnd.github.v3+json",
        // }),
      }
    );
    const data = await api.json();
    setRepos(data);
  };
  console.log(repos);
  return (
    <DetailsContext.Provider value={{ repos }}>
      {children}
    </DetailsContext.Provider>
  );
};
export default DetailsProvider;
