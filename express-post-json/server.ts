import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId = 4;
const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const gradesArray: any = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  console.log(req.method);
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res) => {
  const { id } = req.params;
  if (!Number.isInteger(+id)) {
    res.status(400).json({ error: `${id} not an integer` });
    return;
  }
  if (!(id in grades)) {
    res.status(404).json({ error: `${id} not found` });
    return;
  }
  delete grades[+id];
  res.sendStatus(204);
});

app.post('/api/grades', (req, res) => {
  const { name, course, score } = req.body;
  if (!name || !course || score === undefined) {
    res.status(400).json('Bad request');
    return;
  }
  const grade = req.body;
  grade.id = nextId;
  grades[nextId++] = grade;
  res.status(201).json(grade);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
