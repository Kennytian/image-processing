import { download, flip } from '../src/libs';

describe('small file', () => {
  let filePath = '';

  test('test download function', async () => {
    const url = 'https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=600&q=10'; // small
    filePath = await download(url, 'small');
    expect(filePath).toBeTruthy();
    expect(filePath).toContain('/assets/small');
  });

  test('test flip function', async () => {
    const outputInfo = await flip(filePath, 'small');
    expect(outputInfo).toBeTruthy();
    expect(outputInfo).toMatchObject({ format: 'jpeg' });
  });
});

