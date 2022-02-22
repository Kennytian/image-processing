import { createWriteStream } from 'fs';
import { Dispatcher, stream } from 'undici';
import { URL, UrlObject } from 'url';

export async function download(url: string | URL | UrlObject, fileName: string): Promise<string> {
  try {
    let imagePath = '';
    const factory: Dispatcher.StreamFactory = ({ headers }) => {
      const assetsPath = `${process.cwd()}/assets`;
      const fileType = headers['content-type']?.replace(/image\//, '') ?? 'jpg';
      imagePath = `${assetsPath}/${fileName}.${fileType}`;
      return createWriteStream(imagePath);
    };

    await stream(url, { method: 'GET', bodyTimeout: 60 * 60 * 20 }, factory);

    return Promise.resolve(imagePath);
  } catch (err) {
    console.error('Opps===download===', err);
    return Promise.reject(err);
  }
}
