import Config from 'react-native-config';
export const getApiUrl = () => {
  if (Config.NODE_ENV === 'simpsonsviewer') {
    return 'https://api.duckduckgo.com/?q=simpsons+characters&format=json';
  } else {
    return 'https://api.duckduckgo.com/?q=the+wire+characters&format=json';
  }
};
