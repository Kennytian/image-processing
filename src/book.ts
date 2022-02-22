import { createWriteStream } from 'fs';
import sharp from 'sharp';
import { Client, stream } from 'undici';

const assetsPath = `${process.cwd()}/assets`;

async function bufferTest() {
  console.time('bufferTest');
  const client = new Client('https://images.unsplash.com');
  const reqResult = await client.request({
    path: '/photo-1544716278-ca5e3f4abd8c',
    method: 'GET'
  });
  const reqBuffer = await reqResult.body.arrayBuffer();

  const fileOut = `${assetsPath}/book-bufferTest-flipped.jpg`;
  await sharp(Buffer.from(reqBuffer)).rotate(180).toFile(fileOut);
  console.timeEnd('bufferTest');
}

async function fileTest() {
  console.time('fileTest');
  const imageUrl = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c';
  const filePath = `${assetsPath}/book-fileTest.jpg`;
  const factory = () => createWriteStream(filePath);
  await stream(imageUrl, { method: 'GET', bodyTimeout: 60 * 60 * 20 }, factory);
  const fileOut = `${assetsPath}/book-fileTest-flipped.jpg`;
  await sharp(filePath).rotate(180).toFile(fileOut);
  console.timeEnd('fileTest');
}

bufferTest();
fileTest();
