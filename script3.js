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

// fetch("https://jsonplaceholder.typicode.com/todos/") //fetching data from the API, I mean, a promise
//   .then((response) => response.json()) //converting the response to json, I mean, a promise again
//   .then((json) => {
//     json.map((item) => {
//       item.id == 10 ? (item.title = "Iury") : item;
//     });
//     console.log(json);
//   }); //this will be printed first, because the fetch is a promise, and it will be executed after the console.log

// async function getTodos() {
//   //await will wait the promise to be resolved only inside an async function
//   const responde = await fetch("https://jsonplaceholder.typicode.com/todos/");
//   const data = responde.json();
//   console.log(data);
//   return data;
// }

// const todos = getTodos();
// console.log(todos); //this will be printed second, because the await will wait the promise to be resolved, and then it will be executed
