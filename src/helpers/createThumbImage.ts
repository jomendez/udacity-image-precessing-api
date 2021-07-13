import sharp from 'sharp';
import fs from 'fs';

export const thumPathDirectory = 'assets/thumb/';

export default async function createThumbImage(
  imagePath: string,
  thumbPath: string,
  width: string,
  height: string
): Promise<void> {
  try {
    if (!fs.existsSync(thumPathDirectory)) {
      fs.mkdirSync(thumPathDirectory);
    }
    await sharp(imagePath)
      .resize(parseInt(width), parseInt(height))
      .toFile(thumbPath);
  } catch (error) {
    console.error(error);
  }
}
