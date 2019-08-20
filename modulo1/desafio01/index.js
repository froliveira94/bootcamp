const express = require("express");

const server = express();

server.use(express.json());

const projects = [{ id: "1", title: "Primeiro Projeto", tasks: [] }];

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  const { id, title, tasks } = req.body;
  if (!title || !id) {
    return res.status(400).send({ error: "Title and id are required" });
  }
  projects.push({ id, title, tasks: !!tasks ? tasks : [] });
  return res.json(projects);
});

server.listen(3000);
