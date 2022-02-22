import { createWriteStream } from 'fs';
import sharp from 'sharp';
// import got from 'got';
import { Client, stream } from 'undici';

const assetsPath = `${process.cwd()}/assets`;

async function bufferTest() {
  console.time('bufferTest');
  const client = new Client('https://effigis.com');
  const reqResult = await client.request({
    path: '/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg',
    method: 'GET'
  });
  const reqBuffer = await reqResult.body.arrayBuffer();

  const fileOut = `${assetsPath}/map-bufferTest-flipped.jpg`;
  await sharp(Buffer.from(reqBuffer)).rotate(180).toFile(fileOut);
  console.timeEnd('bufferTest');
}

async function fileTest() {
  console.time('fileTest');
  const imageUrl = 'https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg';
  const filePath = `${assetsPath}/Airbus-fileTest.jpg`;
  const factory = () => createWriteStream(filePath);
  await stream(imageUrl, { method: 'GET', bodyTimeout: 60 * 60 * 20 }, factory);
  const fileOut = `${assetsPath}/map-fileTest-flipped.jpg`;
  await sharp(filePath).rotate(180).toFile(fileOut);
  console.timeEnd('fileTest');
}

// async function gotTest() {
//   console.time('gotTest');
//   const imageUrl = 'https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg';
//   const sharpStream = sharp({ failOnError: false });
//   await got.stream(imageUrl).pipe(sharpStream);
//   const fileOut = `${assetsPath}/map-fileTest-flipped.jpg`;
//   await sharpStream.rotate(180).toFile(fileOut);
//   console.timeEnd('gotTest');
// }

// gotTest();
fileTest();
// bufferTest();

