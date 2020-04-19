const libraries = [
  {
    branch: "downtown",
    manager: "dolim",
  },
  {
    branch: "riverside",
    manager: "hkim",
  },
];

// The branch field of a book indicates which library has it in stock
const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    branch: "riverside",
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton",
    branch: "downtown",
  },
];

// Resolver map
const resolvers = {
  Query: {
    libraries() {
      // Return our hardcoded array of libraries
      return libraries;
    },
  },
  Library: {
    books(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return books.filter((book) => book.branch === parent.branch);
    },
  },
  Book: {
    // The parent resolver (Library.books) returns an object with the
    // author's name in the "author" field. Return a JSON object containing
    // the name, because this field expects an object.

    author(parent) {
      // console.log("parent is", parent);
      return {
        name: parent.author,
      };
    },
  },

  // Because Book.author returns an object with a "name" field,
  // Apollo Server's default resolver for Author.name will work.
  // We don't need to define one.
};

export default resolvers;
