const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const mypassword = 'PASSWORD'
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: mypassword,
    database: 'movie_db'
  },
  console.log(`Connected to the courses_db database.`)
);
//5 apis, 2 gets 2 post and one delete 

// GET Route for homepage
app.get('/api/movies', (req, res) =>
  db.query('SELECT * FROM movies', function (err, results) {
    res.json(results);
  })
);

//add movies 
app.get('/api/add-movie', (req, res) =>
  db.query('SELECT * FROM movies', function (err, results) {
    res.json(results);
  })
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
