import { API_URL_ENV } from '@env';
// import Constants from 'expo-constants';

//HOST BUILD || TEST LOCAL
// export const API_URL = Constants.expoConfig?.extra?.apiUrl || 'http://10.0.2.2:3000';

//HOST MAIN
export const API_URL = API_URL_ENV;

console.info('API_URL => ', API_URL);
