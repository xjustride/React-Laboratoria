const fs = require('fs');

// Funkcja generująca losową datę urodzenia (między 1980 a 2010 rokiem)
function getRandomBirthDate() {
  const start = new Date(1980, 0, 1);
  const end = new Date(2010, 11, 31);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
    .toISOString().split('T')[0]; // Formatujemy datę jako 'YYYY-MM-DD'
}

// Funkcja losująca losowy kolor oczu
function getRandomEyeColor() {
  const eyeColors = ['blue', 'green', 'brown', 'hazel'];
  return eyeColors[Math.floor(Math.random() * eyeColors.length)];
}

// Funkcja losująca markę samochodu
function getRandomCarBrand(carBrands) {
  return carBrands[Math.floor(Math.random() * carBrands.length)];
}

// Funkcja zapisująca dane do pliku module-data.js
function saveDataToFile(data) {
  const dataString = `export const data = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync('./src/module-data.js', dataString, (err) => {
    if (err) {
      console.error('Błąd podczas zapisywania pliku', err);
      return;
    }
    console.log('Plik module-data.js został wygenerowany');
  });
}

// Funkcja generująca tablicę osób lub obiektów na podstawie pliku names.txt i carBrands.txt
function generateData(count, names, carBrands) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const person = {
      id: i + 1, // Unikatowe ID
      name: names[Math.floor(Math.random() * names.length)], // Losowe imię
      birth: getRandomBirthDate(), // Losowa data urodzenia
      eyes: getRandomEyeColor(), // Losowy kolor oczu
      car: getRandomCarBrand(carBrands) // Losowa marka samochodu
    };
    data.push(person);
  }
  return data;
}

// Odczyt liczby obiektów z argumentu wiersza poleceń
const count = Number(process.argv[2]) || 10;

// Odczyt plików names.txt i carBrands.txt
fs.readFile('./names.txt', 'utf8', (err, namesData) => {
  if (err) {
    console.error('Błąd podczas odczytu pliku names.txt', err);
    return;
  }

  fs.readFile('./carBrands.txt', 'utf8', (err, carBrandsData) => {
    if (err) {
      console.error('Błąd podczas odczytu pliku carBrands.txt', err);
      return;
    }

    const names = namesData.split('\n').map(s => s.trim()).filter(n => n.length > 0);
    const carBrands = carBrandsData.split('\n').map(s => s.trim()).filter(n => n.length > 0);

    const generatedData = generateData(count, names, carBrands);
    saveDataToFile(generatedData);
  });
});
