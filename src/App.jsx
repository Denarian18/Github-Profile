import React, { useState, useEffect } from 'react';
import Hero from './components/hero/hero.jsx';
import Header from './components/header/header.jsx';
import Repos from './components/repos/repos.jsx'
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [location, setLocation] = useState(null);
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (!selectedUser) return;

    // Fetch user details
    fetch(`https://api.github.com/users/${selectedUser}`)
      .then(res => res.json())
      .then(data => {
        setFollowers(data.followers);
        setFollowing(data.following);
        setLocation(data.location);
      });

    // Fetch user repos
    fetch(`https://api.github.com/users/${selectedUser}/repos`)
      .then(res => res.json())
      .then(data => setRepos(data));
  }, [selectedUser]);

  return (
    <>
      <Hero setSelectedUser={setSelectedUser} />
      <Header followers={followers} following={following} location={location} />
      <Repos repos={repos} />
    </>
  );
}

export default App;
