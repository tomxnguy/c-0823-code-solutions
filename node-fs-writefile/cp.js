import { readFile, writeFile } from 'node:fs/promises';

try {
  const [, , source, dest] = process.argv;
  const sourceContents = await readFile(source);
  await writeFile(dest, sourceContents);
} catch (error) {
  console.error(error);
}
