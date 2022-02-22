import { existsSync } from 'fs';
import sharp from 'sharp';

export async function flip(filePath: string, fileName: string) {
  try {
    if (!existsSync(filePath)) {
      console.error('Opps===flip===filePath is empty');
      return null;
    }

    const instance = sharp(filePath);
    const originMeta = await instance.metadata();

    const assetsPath = `${process.cwd()}/assets`;
    const fileOut = `${assetsPath}/${fileName}-flipped.${originMeta.format}`;

    // await sharp(imgPath).flip(true).flop(true).toFile(fileOut);
    return await instance.rotate(180).toFile(fileOut);
  } catch (err) {
    console.error('Opps===flip===', err);
  }
}
