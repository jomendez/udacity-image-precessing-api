import express from 'express';
import processImage from './middleware/processImage';
import requestValidation from './middleware/requestValidation';

const routers = express.Router();

routers.use(
  '/image',
  [requestValidation, processImage],
  (request: express.Request, response: express.Response): void => {
    response.status(200);
    response.send('Ok');
  }
);

export default routers;
