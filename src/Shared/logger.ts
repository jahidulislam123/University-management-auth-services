import { createLogger, format, transports } from 'winston';
import path from 'path';
const { combine, timestamp, label, printf , prettyPrint } = format;

// Custom format with day name, month name, date, year, time
const myFormat = printf(({ level, message, label, timestamp  }) => {
  const dateObj = new Date(timestamp as string); // cast timestamp to string

  // Get full day name and month name
  const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'long' }); // Thursday
  const monthName = dateObj.toLocaleDateString('en-US', { month: 'long' }); // June
  const day = String(dateObj.getDate()).padStart(2, '0'); // 01
  const year = dateObj.getFullYear();
  const hours = String(dateObj.getHours()).padStart(2, '0');
  const minutes = String(dateObj.getMinutes()).padStart(2, '0');
  const seconds = String(dateObj.getSeconds()).padStart(2, '0');

  return `${dayName}, ${monthName}, ${day}, ${year} ${hours}:${minutes}:${seconds} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    label({ label: 'right meow!' }),
    timestamp(),
    myFormat,
    prettyPrint()
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
});

const errorlogger = createLogger({
  level: 'error',
  format: combine(
    label({ label: 'User-Service' }),
    timestamp(),
    prettyPrint(),
    myFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
});

export { logger, errorlogger };
