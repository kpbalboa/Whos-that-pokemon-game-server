const express = require('express');
const questionRoutes = express.Router();

const pool = require("./connection/connections");


function selectAllQuestions(req, res) {
    pool.query('select * from "Questions"').then(result => {
      res.send(result.rows);
    });
  }
  function selectAllScores(req, res) {
    pool.query('select * from "scores" order by score desc').then(result => {
      res.send(result.rows);
    });
  }
  questionRoutes.post('/scores', (req, res) => {
    pool
    .query(
      "insert into scores (name, score) values ($1::text, $2::int)",
      [
        req.body.name,
        req.body.score
      ]
    )
    });

questionRoutes.get('/questions', selectAllQuestions);
questionRoutes.get('/scores', selectAllScores);
module.exports=questionRoutes