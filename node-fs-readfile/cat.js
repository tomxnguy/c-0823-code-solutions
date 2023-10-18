import { readFile } from 'node:fs/promises';

const filenames = process.argv.slice(2);

async function readCat() {
  try {
    const ps = filenames.map(
      async (filename) => await readFile(filename, { encoding: 'utf8' })
    );
    const contents = await Promise.all(ps);
    console.log(contents.join('\n'));
  } catch (error) {
    console.log(error);
  }
}

readCat();
