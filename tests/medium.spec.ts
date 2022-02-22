import { download, flip } from '../src/libs';

jest.setTimeout(1000 * 60 * 30);

describe('small file', () => {
  let filePath = '';

  test('test download function', async () => {
    const url = 'https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf'; // building
    filePath = await download(url, 'building');
    expect(filePath).toBeTruthy();
    expect(filePath).toContain('/assets/building');
  });

  test('test flip function', async () => {
    const outputInfo = await flip(filePath, 'building');
    expect(outputInfo).toBeTruthy();
  });
});

