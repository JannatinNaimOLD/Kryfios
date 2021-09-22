const fs = require('fs');
const path = require('path');
const moment = require('moment');
const {
  logDirectory,
  logFile,
  logTypeConfig,
  processTypeConfig,
} = require('../settings.json');


const log = async (message, logType = 'info', processType = 'general') => {
  const TIMESTAMP = moment().format('YYYY-MM-DD HH:mm:ss');

  let plainTextLog = '';
  plainTextLog += `[${TIMESTAMP}] `;
  plainTextLog += `[${processType.toUpperCase()}] `;
  plainTextLog += `[${logType.toUpperCase()}] `;
  plainTextLog += message + '';
  plainTextLog += '\n';

  const logDirectoryPath = path.join(__dirname, '../', logDirectory);
  const logFilePath = path.join(logDirectoryPath, logFile);

  try {
    if (!fs.existsSync(logDirectoryPath)) {
      fs.mkdirSync(logDirectoryPath, {recursive: true});
    }
    fs.writeFileSync(
        logFilePath,
        plainTextLog,
        {
          flag: 'a+',
          encoding: 'utf-8',
        },
    );
  } catch (e) {
    console.error(e);
  }

  const logTypeColor = logTypeConfig[logType]?.color || '';
  const processTypeColor = processTypeConfig[processType]?.color || '';

  logTypeColor ?
    logType = logType.toUpperCase()[logTypeColor] :
    logType = logType.toUpperCase();

  processTypeColor ?
    processType = processType.toUpperCase()[processTypeColor] :
    processType = processType.toUpperCase();

  console.log(
      `[${TIMESTAMP}]`,
      `[${processType}]`,
      `[${logType}]`,
      message,
  );
};

module.exports = log;
