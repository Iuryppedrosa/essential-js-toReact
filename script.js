///////////// aula 1

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

function getBooks() {
  return data;
}

function getBookById(id) {
  return data.find((book) => book.id === id);
}

const book = getBooks();
console.log(book);

const bookById = getBookById(1);
console.log(bookById);

const { reviews, genres } = bookById;
console.log(reviews.libraryThing, genres);

////////////////// 2

// const firstGenre = genres[0];
// const secondGenre = genres[1];
// console.log(firstGenre, secondGenre);

const bookdId2 = getBookById(10);
const { genres: outra } = bookdId2;

const [firstGenre, secondGenre, ...ultima] = outra;
console.log(firstGenre, secondGenre, ultima);

const newGenres = [...outra, "epicFantasy"];
console.log(newGenres);
console.log(newGenres.filter((genre) => genre.includes("Fiction")));

/////////////////////// aula 3

// para atualizar, é necessario um unico novo objeto, é necessário criar um novo objeto com os valores antigos e os novos valores
// consigo espalhar para objetos aninhados
const bookOnly = getBookById(9);
const updateBook = {
  ...bookOnly,
  moviePublicationDate: "2021-10-10",
  pages: 500,
  reviews: {
    ...bookOnly.reviews,
    goodreads: {
      ...bookOnly.reviews.goodreads,
      rating: 5,
    },
  },
};
updateBook;

////////////////////////// aula 4

const bookAula4 = getBookById(5);
const summary = `${bookAula4.title} was written by ${
  bookAula4.author
} and published on ${bookAula4.publicationDate.split("-")[0]}. It has ${
  bookAula4.pages
} pages and belongs to the genres`;
summary;

////////////////////////// aula 5
const bookAula5 = getBookById(7);
const { title, author, publicationDate, pages } = bookAula5;
const pagesLongOrShort = pages > 500 ? "long" : "short";
pagesLongOrShort;

////////////////////////// aula 6
const bookAula6 = getBookById(3);
bookAula6;

// function getYearOfBokk(str) {
//   return str.split("-")[0];
// }

const getYearOfBokk = (str) => str.split("-")[0];

console.log(getYearOfBokk(bookAula6.publicationDate));

////////////////////////// aula 7
const bookAula7 = getBookById(8);
bookAula7;

console.log(true && "The Hobbit");
console.log(false && "The Hobbit");

console.log(bookAula7.hasMovieAdaptation && "Yes");
console.log(bookAula4.hasMovieAdaptation && "Yes");

console.log(bookAula7.translations.includes("Portugues") || "Not Translated");

const newBookAula7 = {
  ...bookAula7,
  pages: 0,
};
newBookAula7;

// abaixo temos um problema pois o valor 0 é considerado falso, então ele não irá imprimir o valor 0

console.log(newBookAula7.pages || "No pages");

// para resolver isso, podemos usar o operador de coalescencia nula que é o ??, ele irá retornar o valor da esquerda se ele for nulo ou indefinido
console.log(newBookAula7.pages ?? "No pages");
// ou podemos usar o operador ternario
console.log(newBookAula7.pages < 1 ? newBookAula7.pages : "No pages");

////////////////////////// aula 8
const bookAula8 = getBookById(4);
bookAula8;
// transformando libraryThing em undefined para que o totalReviews quebre

bookAula8.reviews.libraryThing = undefined;
// outro tipo de declaracao de funcao abaixo:
// function totalReviews(book) {
//   const { goodreads, libraryThing } = book.reviews;
//   return goodreads.reviewsCount + libraryThing.reviewsCount;
// }

// para resolver o erro, podemos usar o operador de encadeamento opcional ?. que irá verificar se o valor é nulo ou indefinido e não irá quebrar o código
// ainda, podemos usar o operador de coalescencia nula ?? para retornar 0 caso o valor seja nulo ou indefinido
const totalReviews = (book) =>
  book.reviews.goodreads.reviewsCount +
  (book.reviews.libraryThing?.reviewsCount ?? 0);

console.log(totalReviews(bookAula8));

////////////////////////// aula 9
