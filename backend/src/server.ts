import Logger from './core/Logger';
import { port, environment } from './config';
import app from './app';

console.log(`detected env: ${process.env.NODE_ENV}`);
console.log(`logger assigned level: ${Logger.level}`);

app
  .listen(port, () => {
    Logger.info(`server running on port : ${port}`);
  });