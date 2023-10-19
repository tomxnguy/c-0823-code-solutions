import { writeFile } from 'node:fs/promises';

async function writeNote() {
  try {
    await writeFile('note.txt', process.argv[2] + '\n', 'utf-8');
  } catch (error) {
    console.error(error);
  }
}

writeNote();
