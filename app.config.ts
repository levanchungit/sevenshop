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
  scheme: 'com.levanchung.it.sevenshop',
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
    googleServicesFile: './google-services.json',
    adaptiveIcon: {
      foregroundImage: './src/assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
    package: 'com.levanchung.it.sevenshop',
  },
  web: {
    favicon: './src/assets/favicon.png',
  },
  extra: {
    eas: {
      projectId: '7076de2a-0de0-4a71-aa4c-dae2b8dd04fb',
    },
  },
  owner: 'levanchung.it',
});
