const person = {
  name: "Arya",
  age: 21,
  location: {
    city: "Jaipur",
    State: "Rajasthan",
    temp: 93
  }
};

const { name: firstName = "Anonymouns", age } = person;
console.log(`${firstName} is ${age}`);

const book = {
  title: "Ego is the Enemy",
  author: "Ryan"
};

const arr = ["LNMIIT", "Jaipur", "Rajasthan", "302031"];

const [destination, city, state, zip] = arr;

console.log(destination);
