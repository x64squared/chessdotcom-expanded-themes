'use strict';

const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = require('./paths');

module.exports = {
    entry: {
        contentScript: PATHS.app + '/src/contentScript.js',
    },
    output: {
        filename: 'build.js',
        path: PATHS.build,
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: PATHS.app + '/manifest.json', to: PATHS.build },
                { from: PATHS.app + '/src/popup.html', to: PATHS.build },
                { from: PATHS.app + '/src/popup.css', to: PATHS.build },
                { from: PATHS.app + '/src/popup.js', to: PATHS.build },
                { from: PATHS.app + '/styles/', to: PATHS.build + '/styles/' },
                { from: PATHS.images + '/ccThemes_logo.png', to: PATHS.build + '/images/ccThemes_logo.png' },
            ],
        }),
    ],
};
