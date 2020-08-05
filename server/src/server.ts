import express from "express";

const app = express();

app.get("/", (request, response) => {

  const users = [
    {name: 'italo', age:'20'},
    {name: 'jose', age:'78'}
  ]

  return response.json(users);
});

app.listen(3333);