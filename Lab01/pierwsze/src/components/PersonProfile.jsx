import React from 'react';

function PersonProfile({ person }) {
  return (
    <div className="card" style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>Person ID: {person.id}</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Birth Date:</strong> {person.birth}</p>
      <p><strong>Eye Color:</strong> {person.eyes}</p>
      <p><strong>Car:</strong> {person.car}</p>
    </div>
  );
}

export default PersonProfile;
