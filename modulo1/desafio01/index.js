const express = require("express");

const server = express();

server.use(express.json());

let projects = [{ id: "1", title: "Primeiro Projeto", tasks: [] }];

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

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;
  const newProjectsArray = projects.filter(item => item.id !== id);
  projects = newProjectsArray;
  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.query;
  const newProjectArray = projects.map(item => {
    if (item.id !== id) {
      return item;
    }
    return {
      id,
      title,
      tasks: item.tasks
    };
  });
  return res.json(newProjectArray);
});

server.listen(3000);
