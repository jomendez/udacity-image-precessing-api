import express from 'express';
import processImage from './middleware/processImage';
import requestValidation from './middleware/requestValidation';

const routers = express.Router();

routers.use(
  '/image',
  [requestValidation, processImage],
  (request: express.Request, response: express.Response) => {
    response.send('Ok');
  }
);

export default routers;
