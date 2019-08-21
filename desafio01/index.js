const express = require("express");

const server = express();

server.use(express.json());

let numberOfRequests = 0;
let projects = [{ id: "1", title: "Primeiro Projeto", tasks: [] }];

server.use((req, res, next) => {
  numberOfRequests = numberOfRequests + 1;
  console.log(`Requisições realizadas: ${numberOfRequests}`);
  next();
});

function checkIdExists(req, res, next) {
  const { id } = req.params;
  const project = projects.filter(item => item.id === id);
  if (!project.length) {
    return res.status(400).json({ error: "Project does not exists" });
  }
  return next();
}

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

server.post("/projects/:id/tasks", checkIdExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const newProjectsArray = projects.map(item => {
    let tasks = item.tasks;
    if (item.id !== id) {
      return item;
    }
    tasks.push(title);
    return {
      ...item,
      tasks
    };
  });
  projects = newProjectsArray;
  return res.json(projects);
});

server.delete("/projects/:id", checkIdExists, (req, res) => {
  const { id } = req.params;
  const newProjectsArray = projects.filter(item => item.id !== id);
  projects = newProjectsArray;
  return res.json(projects);
});

server.put("/projects/:id", checkIdExists, (req, res) => {
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
  projects = newProjectArray;
  return res.json(projects);
});

server.listen(3000);
