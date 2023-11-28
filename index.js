const mongoose = require('mongoose');
const Models = requier('./models.js');

const Movies = Models.Movie;
const Users = Models.User;

const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
const uuid = require('uuid');
const { debounce } = require("lodash");

const app = express();
const port = 8080;

//Use Morgan middleware to log requests
app.use(morgan("combined"));

app.use(express.static("public"));

let movies = [
  {
    Title: "Amelie",
    Genre: "Romantic Comedy",
    Director: "Jean-Pierre Jeunet",
    Description:
      "Despite being caught in her imaginative world, Amelie, a young waitress, decides to help people find happiness. Her quest to spread joy leads her on a journey where she finds true love.",
    Year: 2001,
  },
  {
    Title: "Eternal Sunshine of the Spotless Mind",
    Genre: "Romantic Drama",
    Director: "Michel Gondry",
    Description:
      "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories for ever.",
    Year: 2004,
  },
  {
    Title: "Life is Beautiful",
    Genre: "Drama",
    Director: "Robert Benigni",
    Description:
      "When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.",
    Year: 1997,
  },
  {
    Title: "Pan's Labyrinth",
    Genre: "Fantasy",
    Director: "Guillermo del Toro",
    Description:
      "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
    Year: 2006,
  },
  {
    Title: "Fight Club",
    Genre: "Drama",
    Director: "David Fincher",
    Description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    Year: 1999,
  },
  {
    Title: "Parasite",
    Genre: "Thriller",
    Director: "Bong Joon-ho",
    Description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    Year: 2019,
  },
  {
    Title: "Requim for a Dream",
    Genre: "Psychological Drama",
    Director: "Darren Aronofsky",
    Description:
      "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
    Year: 2000,
  },
  {
    Title: "Old Boy",
    Genre: "Thriller",
    Director: "Park Chan-wook",
    Description:
      "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
    Year: 2003,
  },
  {
    Title: "There Will be Blood",
    Genre: "Drama",
    Director: "Paul Thomas Anderson",
    Description:
      "A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.",
    Year: 2007,
  },
  {
    Title: "The Dark Knight",
    Genre: "Action",
    Director: "Christopher Nolan",
    Description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    Year: 2008,
  },
];

//Create the GET route for /
app.get("/", (req, res) => {
  res.send("Welcome to my movie API!");
});

app.get("/secreturl", (req, res) => {
  res.send("This is a secret url with super top-secret content.");
});

//Create the GET route for /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

//GET: return data about a single movie by title
app.get("/movies/:title", (req, res) => {
  const { title } = req.params;
  const movie = movies.find((movie) => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send("No such movie");
  }
  });

//GET: return data about genre
app.get("/movies/genre/:genreName", (req, res) => {
    res.send('Successful GET request returning data on genre');
});

//GET: return data about director
app.get("/movies/directors/:directorName", (req, res) => {
    res.send('Successful GET request returning data on director');
});

//POST: allow new user to register
app.post("/users", (req, res) => {
    res.send('Allow user to register');
});

//PUT: allow user to update info
app.put("/users/:userId", (req, res) => {
    res.send('Allow user to update info');
});

//POST: allow user to add a movie to favorites
app.post("/users/:userId/favorites", (req, res) => {
    res.send('Allow user to add movie to favorites');
});

//DELETE: allow user to remove a movie from favorites
app.delete("/users/:userId/favorites/:movieId", (req, res) => {
    res.send('Allow user to remove movie from favorites');
});

//DELETE: allow user to deregister
app.delete("/users/:userId/", (req, res) => {
    res.send('Allow user to deregister');
});


//Error-handling middleware function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//Start server
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});
