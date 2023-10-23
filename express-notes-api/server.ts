import express from 'express';
import { readFile, writeFile } from 'node:fs/promises';

type Note = {
  id: number;
  content: string;
};

type Data = {
  nextId: number;
  notes: Record<number, Note>;
};

const app = express();
app.use(express.json);

app.get('/api/notes', async (req, res) => {
  try {
    const data = await readData();
    const notes: Note[] = [];
    for (const id in data.notes) {
      notes.push(data.notes[id]);
    }
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An unexpected error occured' });
  }
});

app.get('/api/notes:noteId', async (req, res) => {
  const data = await readData();
  const { noteId } = req.params;
  res.json(data.notes[+noteId]);
});

app.post('api/notes', async (req, res) => {
  const data = await readData();
  const { content } = req.body;
  const newNote = {
    id: data.nextId,
    content,
  };
  data.notes[data.nextId++] = newNote;
  await writeData(data);
  res.json(newNote);
});

app.put('api/notes/:noteId', async (req, res) => {
  const data = await readData();
  const { noteId } = req.params;
  const { content } = req.body;
  const note: Note = {
    id: +noteId,
    content,
  };
  data.notes[+noteId] = note;
  await writeData(data);
  res.json(note);
});

app.delete('api/notes/:noteId', async (req, res) => {
  const data = await readData();
  const { noteId } = req.params;
  delete data.notes[+noteId];
  await writeData(data);
  res.sendStatus(204);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});

async function readData(): Promise<Data> {
  const data = await readFile('data.json', 'utf-8');
  return JSON.parse(data);
}

async function writeData(data: Data): Promise<void> {
  const value = JSON.stringify(data, null, 2);
  await writeFile('data.json', value, 'utf8');
}
