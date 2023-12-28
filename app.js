const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const port = 3000;
const mysql = require("mysql")
const pokemon = require('./test.json');

// MariaDB 연결
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tmd10045",
  database: "test"
});

// 연결 확인
connection.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Connected to MariaDB');
});