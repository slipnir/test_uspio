import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import autoprefixer from "autoprefixer";

// const path = require('path');

export default defineConfig({
    // root: path.resolve(__dirname, 'src'),
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080
    },
    plugins: [
        eslint({
            include: ['./src/**/*.js'],
        }),
        stylelint({
            include: ['./src/**/*.css', './src/**/*.scss'],
        }),
    ],
    css: {
        postcss: {
            plugins: [
                autoprefixer({}) // add options if needed
            ],
        }
    }
});
