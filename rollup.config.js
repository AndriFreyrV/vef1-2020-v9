import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs'


export default {
    input: './src/index.js',
    output: {
      file: './dist/bundle.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonJS({
        include: 'node_modules/**'
      })
    ]
  };