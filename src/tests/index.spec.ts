import supertest from 'supertest';
import app from '../index';
import fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Server is running', () => {
  it('Should return 200 status', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
  it('Should resize image', async (done) => {
    const response = await request.get(
      '/api/image/?name=fjord.jpg&width=200&height=200'
    );
    expect(response.status).toBe(200);
    fs.unlinkSync(path.resolve('assets/thumb/200x200-fjord.jpg'));
    done();
  });
});
