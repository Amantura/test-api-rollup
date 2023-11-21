import Run from '@rollup/plugin-run'
import Alias from '@rollup/plugin-alias'
import Resolve from '@rollup/plugin-node-resolve'
import Commonjs from '@rollup/plugin-commonjs'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { defineConfig } from 'rollup'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  input: './index.js',
  output: {
    file: 'output/index.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    Resolve(),
    Commonjs(),
    Alias({
      entries: [
        { find: '@', replacement: join(__dirname, 'src') },
        { find: '~', replacement: join(__dirname, 'src/db') },
      ]
    }),
    Run({
      execArgv: ['-r', 'source-map-support/register'],
    }),
  ],

  external: [
    'fastify',
    'fastify-plugin',
    'pino-pretty',
    'dotenv'
  ]
})