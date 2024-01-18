var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sih",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  var values = [["demo", 2]];
  for (let i in values) {
    var name = values[i][0];
    name = name.replace(" ", ""); // Remove spaces from the name

    var sql = `CREATE TABLE ${name} (
      fname varchar(30),
      lname varchar(30),
      dob date,
      speciality varchar(50),
      hname varchar(100),
      gender varchar(25),
      age int,
      qualification varchar(50),
      experience int,
      email varchar(50),
      phonenumber varchar(20) not null,
      photo text(16300),
      password varchar(30),
      primary key(phonenumber)
    )`;

    con.query(sql, function (err, result) {
      if (err) {
        console.error(`Error creating table ${name}: ${err.message}`);
      } else {
        console.log(`Table ${name} created`);
      }
    });
  }
});
