import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'sevenshop',
  slug: 'sevenshop',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './src/assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './src/assets/splash.png',
    resizeMode: 'contain',
  },
  scheme: 'sevenshop',
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    jsEngine: 'jsc',
  },
  jsEngine: 'hermes',
  android: {
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '7076de2a-0de0-4a71-aa4c-dae2b8dd04fb',
    },
    apiUrl: process.env.API_URL,
  },
  owner: 'levanchung.it',
});
