import fs from 'fs';
import path from 'path';
import getCache from '../helpers/getCache';

describe('getCache()', () => {
  beforeAll(() => {
    fs.writeFileSync(path.resolve('assets/thumb/dummyFile.jpg'), 'test');
  });

  it('File should be cached', () => {
    expect(getCache(path.resolve('assets/thumb/dummyFile.jpg'))).toBeTrue();
  });

  it('File should not exist ', () => {
    expect(getCache(path.resolve('assets/thumb/IdontExist.jpg'))).toBeFalse();
  });

  afterAll(() => {
    fs.unlinkSync(path.resolve('assets/thumb/dummyFile.jpg'));
  });
});
