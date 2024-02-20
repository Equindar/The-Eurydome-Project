import { environment, logDirectory } from '../config';
import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import fs from 'fs';
import path from 'path';

let dir = logDirectory;
if (!dir) dir = path.resolve('logs');

// create directory if it is not present
if (!fs.existsSync(dir)) {
  // Create the directory if it does not exist
  fs.mkdirSync(dir);
}

const logLevel = environment === 'development' ? 'debug' : 'warn';

const dailyRotateFile = new DailyRotateFile({
  level: logLevel,
  // @ts-ignore
  filename: dir + '/%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  handleExceptions: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: format.combine(
    format.timestamp(),
    format.errors({ stack: true }),
    format.simple(),
  ),
});

export default createLogger({
  level: logLevel,
  format: format.combine(
    format.errors({ stack: true }),
    format.prettyPrint(),
  ),
  transports: [
    new transports.Console(),
    dailyRotateFile,
  ],
  exceptionHandlers: [dailyRotateFile],
  exitOnError: false, // do not exit on handled exceptions
});