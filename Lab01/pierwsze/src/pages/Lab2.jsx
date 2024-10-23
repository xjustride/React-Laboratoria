import React from 'react';
import { useParams } from 'react-router-dom';

function Lab2() {
  const { id } = useParams();

  const profiles = [
    { id: 1, name: 'Jan Kowalski', age: 30 },
    { id: 2, name: 'Anna Nowak', age: 25 },
    { id: 3, name: 'Piotr Wiśniewski', age: 40 },
  ];

  const profile = profiles.find(profile => profile.id === parseInt(id, 10));

  if (!id) {
    return <p>Brak identyfikatora osoby.</p>;
  }

  if (!profile) {
    return <p>Nie znaleziono osoby o tym identyfikatorze.</p>;
  }

  return (
    <div>
      <h1>Profil osoby</h1>
      <p>Imię: {profile.name}</p>
      <p>Wiek: {profile.age}</p>
    </div>
  );
}

export default Lab2;
