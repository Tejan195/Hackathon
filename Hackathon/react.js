// src/App.js
import React, { useState, useEffect } from 'react';
import MentorList from './MentorList';

function App() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    // Fetch mentors from backend API
    fetch('/api/mentors/')
      .then(response => response.json())
      .then(data => setMentors(data))
      .catch(error => console.error('Error fetching mentors:', error));
  }, []);

  return (
    <div className="App">
      <h1>Virtual Mentorship Hub</h1>
      <MentorList mentors={mentors} />
    </div>
  );
}

export default App;

// src/MentorList.js
import React from 'react';

function MentorList({ mentors }) {
  return (
    <div className="MentorList">
      <h2>Mentors</h2>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>
            <h3>{mentor.name}</h3>
            <p>Expertise: {mentor.expertise}</p>
            <p>Bio: {mentor.bio}</p>
            <p>Location: {mentor.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MentorList;
