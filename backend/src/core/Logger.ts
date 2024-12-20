import { environment, logDirectory, timezone } from '../config';
import { createLogger, transports, format, error } from 'winston';
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

// --- DailyRotateFile
// Logger
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
    format.json(),
  ),
});
// Logger
const test = new DailyRotateFile({
  level: logLevel,
  // @ts-ignore
  filename: dir + '/%DATE% error.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  handleExceptions: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: format.combine(
    format.colorize({ all: true }),
    format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS Z'
    }),
    format.align(),
    format.errors({ stack: true }),
    format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
});
// Events
dailyRotateFile.on('new', (filename) => { console.log(`new file ${filename} created...`) })

export const ConsoleLogger = createLogger({
  level: logLevel,
  format: format.combine(
    format.colorize({ all: true }),
    format.timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS Z'
    }),
    format.align(),
    format.errors({ stack: true }),
    format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new transports.Console()],
});

// --- Default-Logger
export default createLogger({
  level: logLevel,
  format: format.combine(
    format.errors({ stack: true }),
    format.simple(),
  ),
  transports: [
    new transports.Console(),
    dailyRotateFile,
    test
  ],
  exceptionHandlers: [dailyRotateFile, test],
  exitOnError: false, // do not exit on handled exceptions
});