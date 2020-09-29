const express = require('express');
const app = express();

app.use(express.json());

function soma(v1, v2) {
    const soma = v1 + v2;
    return soma;
  }

function sub(v1, v2) {
    const sub = v1 - v2;
    return sub;
  }

function mult(v1, v2) {
    const mult = v1 * v2;
    return mult;
  }

  function divisao(v1, v2) {
    const divisao = v1 / v2;
    return divisao;
  }

  function resto(v1, v2) {
    const resto = v1 % v2;
    return resto;
  }

app.post("/soma", (req, res) => {
    const operation = "soma";
    const { v1, v2 } = req.body;
    const result = {
      operation,
      v1,
      v2,
      result: soma(v1, v2)
    };
  
    res.json(result);
  });

app.post("/sub", (req, res) => {
    const operation = "subtração";
    const { v1, v2 } = req.body;
    const result = {
      operation,
      v1,
      v2,
      result: sub(v1, v2)
    };
  
    res.json(result);
  });

app.post("/mult", (req, res) => {
    const operation = "multiplicação";
    const { v1, v2 } = req.body;
    const result = {
      operation,
      v1,
      v2,
      result: mult(v1, v2)
    };
  
    res.json(result);
  });

app.post("/divisao", (req, res) => {
    const operation = "divisão";
    const { v1, v2 } = req.body;
    const result = {
      operation,
      v1,
      v2,
      result: divisao(v1, v2)
    };
  
    res.json(result);
  });

app.post("/resto", (req, res) => {
    const operation = "resto";
    const { v1, v2 } = req.body;
    const result = {
      operation,
      v1,
      v2,
      result: resto(v1, v2)
    };
  
    res.json(result);
  });

app.listen(3000, () => {
    console.log(`Food API is running!`);
  });
  