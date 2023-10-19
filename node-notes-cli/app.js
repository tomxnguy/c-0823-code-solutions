import { writeFile, readFile } from 'node:fs/promises';

const fileContent = await readFile('data.json', 'utf-8');
const dataParse = JSON.parse(fileContent);

const action = process.argv[2];

async function writeNew() {
  await writeFile('data.json', JSON.stringify(dataParse, null, 2));
}

async function readData() {
  for (const key in dataParse.notes) {
    console.log(`${key}:${dataParse.notes[key]}`);
  }
}

async function createData(newNote) {
  const newId = dataParse.nextId;
  dataParse.notes[newId] = newNote;
  dataParse.nextId++;
  await writeNew();
}

async function updateData(id, newNote) {
  dataParse.notes[id] = newNote;
  await writeNew();
}

async function deleteData(id) {
  delete dataParse.notes[id];
  await writeNew();
}

try {
  switch (action) {
    case 'create':
      await createData(process.argv[3]);
      break;
    case 'read':
      await readData();
      break;
    case 'update':
      await updateData(process.argv[3], process.argv[4]);
      break;
    case 'delete':
      await deleteData(process.argv[3]);
      break;
    default:
      throw new Error('This function is not found.');
  }
} catch (error) {
  console.error(error.message);
}
