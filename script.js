// Bibblan
// 1
let book = {
  title: "Me before you",
  author: "Jojo Moyes",
  numPages: 528,
};

// 2
let books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "JK Rowling",
    numPages: 352,
  },
  {
    title: "The Lord of the Rings",
    author: "J R R Tolkien",
    numPages: 1216,
  },
  {
    title: "Metro 2033: Den sista tillflykten",
    author: "Dmitrij Gluchovskij",
    numPages: 463,
  },
  {
    title: "Crazy Rich Asians",
    author: "Kevin Kwan",
    numPages: 544,
  },
  {
    title: "Faithful Place",
    author: "Tana French",
    numPages: 448,
  },
];

// 3
function findBookByTitle(booksArray, searchTitle) {
  // takes two parameters
  for (let book of booksArray) {
    if (book.title.toLowerCase() === searchTitle.toLowerCase()) {
      return book;
    }
  }
  return null;
}

let searchTerm = "Faithful Place";
let result = findBookByTitle(books, searchTerm);

if (result) {
  console.log("Book found:", result);
} else {
  console.log("Book not found");
}

// Letter frequency
function letterFrequency(inputString) {
  // string to analyze
  let frequency = {}; // store character counts

  for (let char of inputString) {
    if (frequency[char]) {
      // if char exists, increment 1
      frequency[char]++;
    } else {
      // if not exist, add key with a value of 1
      frequency[char] = 1;
    }
  }
  return frequency;
}

console.log(letterFrequency("kalle")); // => {"k": 1. "a": 1, "l": 2, "e": 1}
console.log(letterFrequency("aaaa")); // => {"a": 4}
console.log(letterFrequency("ni talar bra latin")); // => {"n": 2, "i":2, " ":3, "t":2, "a":4,"l": 2,"r":2", "b":1 }

// solution 2
let letterFrequency = countCharacters("kalle");
console.log(letterFrequency);

function countCharacters() {
  let object = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (object[char]) {
      object[char]++;
    } else {
      object[char] = 1;
    }
  }
  return object;
}
