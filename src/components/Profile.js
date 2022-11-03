import React, { useEffect, useState } from "react";
import "../App.css";

function Profile() {
  const [profile, setProfile] = useState([]);
  // Fetching Profile Data
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const api = await fetch("https://api.github.com/users/Oluwasemilogo", {
      method: "get",
      headers: new Headers({
        Authorization: "Bearer " + "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",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "request",
        Accept: "application/vnd.github.v3+json",
      }),
    });
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
      <section className="section">
        <div className="stat">
          <p className="profile-figures">{profile.public_repos}</p>
          <h3 className="profile-details"> Repositories</h3>
        </div>
        <div className="stat">
          <p className="profile-figures">{profile.followers}</p>
          <h3 className="profile-details"> Followers</h3>
        </div>
        <div className="stat">
          <p className="profile-figures">{profile.following}</p>
          <h3 className="profile-details">Following</h3>
        </div>
      </section>
    </div>
  );
}

export default Profile;
