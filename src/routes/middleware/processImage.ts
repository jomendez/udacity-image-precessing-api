import express from 'express';
import path from 'path';
import createThumbImage from '../../helpers/createThumbImage';
import getCache from '../../helpers/getCache';

const processImage = express.Router();

export default processImage.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const width: string = req.query.width?.toString() || '200';
    const height: string = req.query.height?.toString() || '200';
    const imageName: string = req.query.name?.toString() || '';
    const imagePath = path.resolve(`assets/images/${imageName}`);
    const thumbPath = path.resolve(
      `assets/thumb/${width}x${height}-${imageName}`
    );

    if (await !getCache(thumbPath)) {
      await createThumbImage(imagePath, thumbPath, width, height);
    }
    res.sendFile(thumbPath);
  }
);
