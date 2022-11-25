//Uppgift Book
let book = {
  title: "Bandersnatch",
  author: "JF Davis",
  genres: "Horror",
  numberOfPages: 370,
};
console.log(book.title, book.author, book.genres, book.numberOfPages);

//Uppgift Hund
let hund = {
  namn: "Nelson",
  breed: "Chihuahua",
  bark() {
    console.log(`Jag heter ${hund.namn}`);
  },
};
console.log(hund.namn, hund.breed);
hund.bark();

//Uppgift Bil
let bil = {
  make: "bmw",
  model: "520",
  year: 2005,
  speed: 0,
  getInfo() {
    console.log(bil.make, bil.model, bil.year, bil.speed);
  },

  increaseSpeed(targetSpeed) {
    for (bil.speed = 0; bil.speed < targetSpeed; bil.speed++) {
      console.log(bil.speed);
    }
  },
  brake(brakeSpeed) {
    for (bil.speed; bil.speed >= brakeSpeed; bil.speed--) {
      console.log(bil.speed);
    }
  },
};
bil.getInfo();
bil.increaseSpeed(10);
bil.brake(0);

//Objekt i objekt
let person = {
  name: "Sixten Faceplant",
  email: "sixten.faceplant@gritacademy.se",
  role: "ninjah",
  adress: {
    street: "Karatevägen 3",
    zip: "41477",
    city: "Kablam City",
  },
};
console.log(
  person.name,
  person.email,
  person.role,
  person.adress.street,
  person.adress.zip,
  person.adress.city
);

//Klona
let newBook = {};
Object.assign(newBook, book);
console.log(newBook);

newBook.title = "Sagan om ringen";
console.log(newBook.title);

person.name = "Dany";
console.log(person.name);

console.log(newBook, person, book);
