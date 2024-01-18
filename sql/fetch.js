var mysql = require("mysql");
const http = require("http");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sih",
});

// Establish the MySQL connection when the application starts
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const server = http.createServer((req, res) => {
  // Your HTTP request handling code goes here
  if (req.url == "/") {
    res.end("hello");
  } else if (req.url == "/userapi") {
    // Construct your SQL query
    var sql = "SELECT * FROM demo"; // Replace 'your_table_name' with the actual table name

    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);

      // Convert the result to JSON
      const jsonData = JSON.stringify(result);

      // Set response headers to indicate JSON content
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);

      // Send the JSON data as the response
      res.end(jsonData);
    });
  }

  console.log(req.url);
});

server.listen(9000, "127.0.0.1", () => {
  console.log("Listening on port 9000");
});
