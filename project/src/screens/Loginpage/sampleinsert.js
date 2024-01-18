var mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); // Parse JSON request bodies

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
});

// Create an API endpoint for handling doctor data insertion
app.post("/api/doctors", (req, res) => {
  const doctorData = req.body;

  // Insert doctor data into the database
  const sql =
    "INSERT INTO doctors (fname, lname, dob, speciality, hname, gender, age, qualification, experience, email, phonenumber, photo, password) VALUES ?";
  const values = [
    [
      doctorData.fname,
      doctorData.lname,
      doctorData.dob,
      doctorData.speciality,
      doctorData.hname,
      doctorData.gender,
      doctorData.age,
      doctorData.qualification,
      doctorData.experience,
      doctorData.email,
      doctorData.phonenumber,
      doctorData.photo,
      doctorData.password,
    ],
  ];

  con.query(sql, [values], function (err, result) {
    if (err) {
      console.error("Error inserting doctor data:", err);
      return res.status(500).json({ error: "Error inserting doctor data" });
    }

    console.log("Number of records inserted: " + result.affectedRows);
    return res
      .status(200)
      .json({ message: "Doctor data inserted successfully" });
  });
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
