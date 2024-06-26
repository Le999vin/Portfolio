/*
author: Levin Pamay
Version: 1.
This configuration file uses Vite to set up a React project. It includes the `@vitejs/plugin-react` plugin for React support. The CSS configuration specifies that CSS modules should be used with `localsConvention: "camelCase"`, which means class names in CSS modules will be converted to camelCase when accessed in JavaScript or TypeScript files. The `defineConfig` function defines the Vite configuration object, exporting it as the default configuration for the project.
*/ 
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
