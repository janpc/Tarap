import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = { ...console };
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};
