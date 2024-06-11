const data = [
  {
    id: 1,
    title: "The Great Gatsby",
    publicationDate: "1925-04-10",
    author: "F. Scott Fitzgerald",
    genres: ["Fiction", "Classic"],
    hasMovieAdaptation: true,
    pages: 218,
    translations: ["Spanish", "French", "German"],
    reviews: {
      goodreads: {
        rating: 3.93,
        ratingsCount: 4000000,
        reviewsCount: 62000,
      },
      libraryThing: {
        rating: 3.86,
        ratingsCount: 120000,
        reviewsCount: 2400,
      },
    },
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    publicationDate: "1960-07-11",
    author: "Harper Lee",
    genres: ["Fiction", "Classic", "Historical"],
    hasMovieAdaptation: true,
    pages: 281,
    translations: ["Spanish", "German", "Italian"],
    reviews: {
      goodreads: {
        rating: 4.27,
        ratingsCount: 4500000,
        reviewsCount: 80000,
      },
      libraryThing: {
        rating: 4.25,
        ratingsCount: 200000,
        reviewsCount: 3200,
      },
    },
  },
  {
    id: 3,
    title: "1984",
    publicationDate: "1949-06-08",
    author: "George Orwell",
    genres: ["Dystopian", "Science Fiction", "Political Fiction"],
    hasMovieAdaptation: true,
    pages: 328,
    translations: ["French", "German", "Spanish"],
    reviews: {
      goodreads: {
        rating: 4.18,
        ratingsCount: 3300000,
        reviewsCount: 75000,
      },
      libraryThing: {
        rating: 4.16,
        ratingsCount: 150000,
        reviewsCount: 3100,
      },
    },
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    publicationDate: "1813-01-28",
    author: "Jane Austen",
    genres: ["Romance", "Classic", "Fiction"],
    hasMovieAdaptation: true,
    pages: 279,
    translations: ["Spanish", "French", "German"],
    reviews: {
      goodreads: {
        rating: 4.26,
        ratingsCount: 2900000,
        reviewsCount: 65000,
      },
      libraryThing: {
        rating: 4.2,
        ratingsCount: 180000,
        reviewsCount: 3600,
      },
    },
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    publicationDate: "1951-07-16",
    author: "J.D. Salinger",
    genres: ["Fiction", "Classic", "Literature"],
    hasMovieAdaptation: false,
    pages: 214,
    translations: ["Spanish", "German", "French"],
    reviews: {
      goodreads: {
        rating: 3.81,
        ratingsCount: 2500000,
        reviewsCount: 45000,
      },
      libraryThing: {
        rating: 3.78,
        ratingsCount: 110000,
        reviewsCount: 2200,
      },
    },
  },
  {
    id: 6,
    title: "Moby-Dick",
    publicationDate: "1851-10-18",
    author: "Herman Melville",
    genres: ["Adventure", "Classic", "Fiction"],
    hasMovieAdaptation: true,
    pages: 635,
    translations: ["French", "Spanish", "German"],
    reviews: {
      goodreads: {
        rating: 3.49,
        ratingsCount: 500000,
        reviewsCount: 14000,
      },
      libraryThing: {
        rating: 3.46,
        ratingsCount: 60000,
        reviewsCount: 1300,
      },
    },
  },
  {
    id: 7,
    title: "War and Peace",
    publicationDate: "1869-01-01",
    author: "Leo Tolstoy",
    genres: ["Historical", "Fiction", "Classic"],
    hasMovieAdaptation: true,
    pages: 1225,
    translations: ["German", "French", "Spanish"],
    reviews: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 250000,
        reviewsCount: 12000,
      },
      libraryThing: {
        rating: 4.1,
        ratingsCount: 70000,
        reviewsCount: 1800,
      },
    },
  },
  {
    id: 8,
    title: "The Hobbit",
    publicationDate: "1937-09-21",
    author: "J.R.R. Tolkien",
    genres: ["Fantasy", "Adventure", "Classic"],
    hasMovieAdaptation: true,
    pages: 310,
    translations: ["Spanish", "French", "German"],
    reviews: {
      goodreads: {
        rating: 4.27,
        ratingsCount: 3200000,
        reviewsCount: 56000,
      },
      libraryThing: {
        rating: 4.23,
        ratingsCount: 190000,
        reviewsCount: 4000,
      },
    },
  },
  {
    id: 9,
    title: "The Catch-22",
    publicationDate: "1961-11-10",
    author: "Joseph Heller",
    genres: ["Satire", "Historical Fiction", "Classic"],
    hasMovieAdaptation: true,
    pages: 453,
    translations: ["French", "Spanish", "German"],
    reviews: {
      goodreads: {
        rating: 3.99,
        ratingsCount: 700000,
        reviewsCount: 18000,
      },
      libraryThing: {
        rating: 3.95,
        ratingsCount: 90000,
        reviewsCount: 2100,
      },
    },
  },
  {
    id: 10,
    title: "Brave New World",
    publicationDate: "1932-08-31",
    author: "Aldous Huxley",
    genres: ["Dystopian", "Science Fiction", "Classic"],
    hasMovieAdaptation: true,
    pages: 268,
    translations: ["Spanish", "French", "German"],
    reviews: {
      goodreads: {
        rating: 3.99,
        ratingsCount: 1400000,
        reviewsCount: 25000,
      },
      libraryThing: {
        rating: 3.96,
        ratingsCount: 85000,
        reviewsCount: 2000,
      },
    },
  },
];

//////////////////////// aula 8 > uso do MAP

function getBooks() {
  return data;
}
const book = getBooks();

function totalReviews(book) {
  return (
    (book.reviews.goodreads?.reviewsCount ?? 0) +
    (book.reviews.libraryThing?.reviewsCount ?? 0)
  );
}

// const totalReviews = (book) =>
//   (book.reviews.goodreads?.reviewsCount ?? 0) +
//   (book.reviews.libraryThing?.reviewsCount ?? 0);

// a forma abaixo, é a forma mais comum de se fazer um map, onde nao se usa o return
const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
  (eachDataIntoArray) => eachDataIntoArray * 2
);
console.log(x);

// ja a forma abaixo, é a forma mais correta, onde se usa o return, porem é necessário usar as chaves e atribuir a uma nova variavel o valor da funcao anonima
const xy = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20].map((eachDataIntoArray) => {
  return {
    valor: eachDataIntoArray * 2,
  };
});
console.log(xy);

const title = getBooks().map(
  (eachDataInsideColectionBook) => eachDataInsideColectionBook.title
);
console.log(title);

const essentialData = getBooks().map((eachDataInsideColectionBook) => {
  return {
    id: eachDataInsideColectionBook.id,
    title: eachDataInsideColectionBook.title,
  };
});

console.log(essentialData);

//another way is not using the return, but using the parentheses
const essentialData2 = getBooks()
  .map((eachDataInsideColectionBook) => ({
    id: eachDataInsideColectionBook.id,
    title: eachDataInsideColectionBook.title,
    // tambem é possivel chamar outras funcoes para calcular algo dentro do map para cada dado
    reviewsCount: totalReviews(eachDataInsideColectionBook),
  }))
  .filter(
    (eachDataInsideColectionBook) =>
      eachDataInsideColectionBook.reviewsCount < 15000
  );
console.log(essentialData2);

//////////////////////// aula 9 > uso do FILTER, que também é chamado para cada item do array

const book2 = getBooks();

// filter retornam OUTRO array, com os dados filtrados
const classicBooks = book2
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation === true);

console.log(classicBooks);

//////////////////////// aula 10 > uso do REDUCE
const book3 = getBooks();

// reduce retorna um valor unico, que é o valor acumulado
const pagesAllBooks = book3.reduce(
  (accumulator, book) => accumulator + book.pages,
  0
);
console.log(pagesAllBooks);
