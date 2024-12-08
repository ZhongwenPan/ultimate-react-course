const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring (解构)

const book = getBook(2);
book;

//
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author);
console.log(pages);

console.log(genres);

/*
const primaryGrnre = genres[0];
const secondaryGenre = genres[1];

//Before:

console.log(primaryGrnre);
console.log(secondaryGenre);
*/

//After:
const [primaryGrnre, secondaryGenre] = genres;

console.log(primaryGrnre);
console.log(secondaryGenre);

//3th and 5th genre:
const [, , thirdGenre, , fifthGenre] = genres;
console.log(thirdGenre);
console.log(fifthGenre);

//Rest Operator:
const newBook = getBook(2);

console.log(newBook);

const [newBookPrimaryGenre, newBookSecondaryGenre, ...otherGenres] =
  newBook.genres;

console.log(newBookPrimaryGenre);
console.log(otherGenres);
console.log(otherGenres[1]);

//Rest Operator can only be put in the last!!!

//Spread Operator:

//If we want to overwrite a property in an object, the opject should be put at the beginning
const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedNewBook = {
  ...newBook,
  //Adding a new property
  moviePublicationDate: "2001-12-19",
  //Overwriting a property
  pages: 999,
};

console.log(updatedNewBook);

//Short-circuiting and logocal operators:

//Falsy values: false, '', 0, null, undifined

// '&&' is usually used for checking falsy values
//It returns the second value if the first one is 'true'
console.log(true && "second value");
console.log(false && "second value");
console.log(0 && "second value");

// '||' is usually used for checking trythy values
// It returns the second value if the first value is 'false'
console.log(0 || "second value");

// '??' is usually used for checking null and undefined values
// It returns the second value if the first is 'null' or 'undefined'
console.log(null ?? "second value");

// Optional Chaining
function getTotalReviewCount(book) {
  const goodread = book.reviews.goodreads.reviewsCount;
  //If any part of 'book.reviews.librarythi' does not exist, JS will not continue getting data from it
  const libraryread = book.reviews.librarythi?.reviewsCount ?? 0;
  return goodread + libraryread;
}

console.log(getTotalReviewCount(book));

// Map Method

let x = [1, 2, 3, 4, 5].map((element) => element * 2);
console.log(x);

let books = getBooks();
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
  };
});

console.log(essentialData);

// Filter Method:
const longBooks = books.filter((book) => book.pages > 500);
const longBooksNamesAndPages = longBooks.map((book) => {
  return {
    title: book.title,
    pages: book.pages,
  };
});
console.log(longBooksNamesAndPages);

// Reduce Method:

//0 is the starting value of the accmulator
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// Sort Method:
const arr = [6, 4, 8, 2, 3];
arr.sort((a, b) => b - a);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
const sortedByPagesNames = sortedByPages.map((book) => {
  return {
    title: book.title,
    pages: book.pages,
  };
});

console.log(sortedByPagesNames);

// 29: Working with immutable arrays

// 1 add a book object to an array
const newBook1 = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook1];
console.log(booksAfterAdd);

// 2 delete a book from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3 Update a book in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 88888 } : book
);

console.log(booksAfterUpdate);
