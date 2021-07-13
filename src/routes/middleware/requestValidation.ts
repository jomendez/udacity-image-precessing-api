import fs from 'fs';
import path from 'path';
import express from 'express';

export default function requestValidation(
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void {
  const imagePath = path.resolve(`assets/images/${req.query.name}`);
  if (!(req.query.name && req.query.width && req.query.height)) {
    res.status(400);
    next('Error!\nMissing parameters');
  } else if (fs.existsSync(imagePath)) {
    next();
  } else {
    res.status(400);
    next('Error!\nInvalid File Name');
  }
}
