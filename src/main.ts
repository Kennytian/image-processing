import { download, flip } from './libs';

async function main() {
  console.time('building image processing');

  // const url = 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=600&q=10';
  const url = 'https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf';
  const filePath = await download(url, 'building');

  await flip(filePath, 'building');

  console.timeEnd('building image processing');
}

main();
