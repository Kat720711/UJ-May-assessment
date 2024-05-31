import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import data from '\data.json';

export default defineConfig({
  base: '/responsive_cv/',
  plugins: [handlebars({
    context: data
  })],
});