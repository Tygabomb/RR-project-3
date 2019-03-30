const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
const mysql = require('mysql');

let conn;

if (process.env.JAWSDB_URL) {
    conn = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    mysql.createConnection({
        host: DB_HOST,
        port: 3306,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    });
}

conn.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id: ${conn.threadId}`);
});

module.exports = conn;
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", PORT, PORT)
  }
})
