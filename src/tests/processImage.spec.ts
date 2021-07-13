import fs from 'fs';
import path from 'path';
import createThumbImage from '../helpers/createThumbImage';

describe('processImage()', () => {
  it('Should create a re-sized image file in the thumb directory', async (done) => {
    await createThumbImage(
      path.resolve('assets/images/palmtunnel.jpg'),
      path.resolve('assets/thumb/TestFile.jpg'),
      '200',
      '200'
    );
    expect(fs.existsSync(path.resolve('assets/thumb/TestFile.jpg'))).toBeTrue();
    fs.unlinkSync(path.resolve('assets/thumb/TestFile.jpg'));
    done();
  });
});
