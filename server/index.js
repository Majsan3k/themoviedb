const express = require("express");
const axios = require("axios")

const PORT = process.env.PORT || 3001;

const app = express();

const bearer = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGY5MTUyZWYzYmRlOWM1NTA1ZWRjYTFkYjc5MWI3NSIsInN1YiI6IjYxNjJjNTQ0MThiNzUxMDA2MTQxMGIyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZZriOkTF7vVtezgHuUu0_i8mtjznBqi1GGPMBJDXS8'

app.get('/imageConfiguration', (req, res) => {

  const url = 'https://api.themoviedb.org/3/configuration'

  axios.get(url, {
    headers: {
      'Authorization': 'Bearer ' + bearer
    }
  })
    .then(response => {
      res.json({ message: response.data.images });
    })
    .catch(error => {
      console.log(error)
    })
})

app.get('/popularMovies', (req, res) => {

  let page = 1;
  let movies = [];

  while (page < 6) {
    const url = 'https://api.themoviedb.org/3/movie/popular?&page=' + page
    movies.push(
      axios.get(url, {
        headers: {
          'Authorization': 'Bearer ' + bearer
        }
      })
        .then(response => new Promise(resolve => resolve(response.data.results)))
    );
    page++;
  }
  
  Promise.all(movies).then(response => {
    res.json({ message: response.flat() });
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});