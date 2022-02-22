import { download, flip } from '../src/libs';

jest.setTimeout(1000 * 60 * 60);

describe('large file', () => {
  let filePath = '';

  test('test download function', async () => {
    const url = 'https://effigis.com/wp-content/uploads/2015/02/Airbus_Pleiades_50cm_8bit_RGB_Yogyakarta.jpg'; // map
    filePath = await download(url, 'map');
    expect(filePath).toBeTruthy();
    expect(filePath).toContain('/assets/map');
  });

  test('test flip function', async () => {
    const outputInfo = await flip(filePath, 'map');
    expect(outputInfo).toBeTruthy();
  });
});

