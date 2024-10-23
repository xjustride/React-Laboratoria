import React from 'react';

function Lab1() {
  const profiles = [
    { id: 1, name: 'Jan Kowalski', age: 30 },
    { id: 2, name: 'Anna Nowak', age: 25 },
    { id: 3, name: 'Piotr Wiśniewski', age: 40 },
  ];

  return (
    <div>
      <h1>Lista profili osób</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name}, wiek: {profile.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lab1;
