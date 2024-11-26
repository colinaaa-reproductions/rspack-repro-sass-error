import { defineConfig } from '@rsbuild/core';

import {pluginSass} from '@rsbuild/plugin-sass'
import {pluginSwc} from '@rsbuild/plugin-webpack-swc'
import {webpackProvider} from '@rsbuild/webpack'

export default defineConfig({
  provider: process.env['USE_WEBPACK'] ? webpackProvider : undefined,
  plugins: [
    pluginSass(),
    pluginSwc(),
  ]
});
