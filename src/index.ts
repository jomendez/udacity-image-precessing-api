import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.listen(port, (): void => {
  console.info(`Server started at http://localhost:${port}`);
});

app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Server Running');
});

app.use('/api', routes);

export default app;
