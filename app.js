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

// 테이블 생성
connection.query('CREATE TABLE classes (id INT AUTO_INCREMENT, room_number VARCHAR(255), instructor VARCHAR(255), field VARCHAR(255), computers INT, students JSON, PRIMARY KEY (id))', (err, result) => {
  if (err) {
    console.log(err);
  } else {
    console.log('테이블 생성 성공');
  }
});

