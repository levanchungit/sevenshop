/* eslint-disable @typescript-eslint/no-empty-interface */
import { extendTheme } from 'native-base';
import colors from './colors';
import components from './components';
import config from './config';
import { fonts, fontConfig } from './fonts';

const theme = extendTheme({ colors, config, fonts, fontConfig, components });

type CustomThemeType = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export default theme;
