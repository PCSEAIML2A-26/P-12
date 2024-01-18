var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sih",
  port: 3306,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var values = [["demo", 2]];
  for (let i in values) {
    var name = values[i][0];
    name = name.replace(" ", "");
    var sql = `INSERT INTO ${name} VALUES (?)`; // Updated SQL query
    var value = [
      "Test",
      "Test surname",
      "2023-09-13",
      "test",
      "test speciality",
      "test gender",
      50,
      "12 fail",
      18,
      "test mail",
      "66772878787",
      "phomtuu",
      "test@321",
    ];
    con.query(sql, [value], function (err, result) {
      // Passing [value] as an array
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  }
});
