const express = require('express');
const app = express();
const port = 3000;

const tasks = [
  {
    id: '1',
    name: 'task1',
    dueAt: '12-dec-2018',
    assignedTo: 'John Doe',
    isCompleted: false,
  },
  {
    id: '2',
    name: 'task2',
    dueAt: '14-dec-2018',
    assignedTo: 'Jen Doe',
    isCompleted: true
  }
];

const users = [
  {
    id: '1',
    firstName: 'Unmay',
    lastName: 'Chaudhari',
    updatedAt: '22-12-2018',
    createdAt: '22-03-2018',
  },
  {
    id: '2',
    firstName: 'Kiyansh',
    lastName: 'Chaudhari',
    updatedAt: '22-12-2018',
    createdAt: '22-03-2018'
  }
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/tasks', (req, res) => {
  // retrive task from database
  res.json(tasks);

});

app.post('/tasks', (req, res) => {
  console.log(req);
  res.json({error: false});
});

app.get('/users', (req, res) => {
  // retrive users from database
  res.json(users);
});

app.post('/users', (req, res) => {
  console.log(req.body);
  res.json({error: false});
});


app.listen(port, { cors: true }, () => console.log(`Example app listening on port ${port}!`));