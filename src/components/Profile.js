import React, { useEffect, useState } from "react";
import "../App.css";

function Profile() {
  const [profile, setProfile] = useState([]);
  // Fetching Profile Data
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const api = await fetch("https://api.github.com/users/Oluwasemilogo");
    const data = await api.json();
    setProfile(data);
  };
  console.log(profile);
  return (
    <div className="profile-container">
      <img src={profile.avatar_url} alt="profile" className="avatar" />
      <h1 className="profile-name">{profile.name}</h1>
      <h3 className="username">@{profile.login}</h3>
      <p className="bio">{profile.bio}</p>
    </div>
  );
}

export default Profile;
