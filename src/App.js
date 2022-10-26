import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const api = await fetch("https://api.github.com/users/Oluwasemilogo/repos");
    const data = await api.json();
    setUsers(data);
  };
  console.log(users);
  return (
    <div className="App">
      <h1>HELLO WORLD.</h1>
    </div>
  );
}

export default App;
