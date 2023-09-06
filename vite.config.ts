import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: path.resolve(__dirname, 'src')},
      { find: '@app', replacement: path.resolve(__dirname, 'src/app')},
      { find: '@gql', replacement: path.resolve(__dirname, 'src/__generated__')},
    ]
  }
})
