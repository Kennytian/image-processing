import { download, flip } from '../src/libs';

describe('medium file', () => {
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
    expect(outputInfo?.width).toBeGreaterThan(0);
    expect(outputInfo?.height).toBeGreaterThan(0);
    expect(outputInfo?.size).toBeGreaterThan(0);
    expect(outputInfo).toMatchObject({
      format: 'jpeg',
      width: expect.any(Number),
      height: expect.any(Number),
      channels: expect.any(Number),
      premultiplied: expect.any(Boolean),
      size: expect.any(Number)
    });
  });
});

