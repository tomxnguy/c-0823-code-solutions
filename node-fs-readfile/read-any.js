import { readFile } from 'node:fs/promises';

async function readAny() {
  try {
    const any = await readFile(process.argv[2], { encoding: 'utf8' });
    console.log(any);
  } catch (error) {
    console.error(error);
  }
}

readAny();
