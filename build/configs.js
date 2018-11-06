const path = require('path');
const VuePlugin = require('rollup-plugin-vue').default;
const css = require('rollup-plugin-css-only');

const resolve = _path => path.join(__dirname, '../', _path);

module.exports = exports = [
    {
        input: resolve('popup/index.js'),
        output: {
            file: resolve('dist/popup.esm.js'),
            format: 'es',
        },
        plugins: [
            css({ output: './dist/bundle.css' }),
            VuePlugin({
                css: false,
            }),
        ],
    },
    {
        input: resolve('popup/index.js'),
        output: {
            file: resolve('dist/popup.js'),
            format: 'umd',
            name: 'IGPopup'
        },
        plugins: [
            css({ output: './bundle.css' }),
            VuePlugin({
                css: false,
            }),
        ],
    },
    {
        input: resolve('popup/index.js'),
        output: {
            file: resolve('dist/popup.common.js'),
            format: 'cjs',
        },
        plugins: [
            css({ output: './bundle.css' }),
            VuePlugin({
                css: false,
            }),
        ],
    },
];