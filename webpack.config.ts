const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx', // Modifier l'entrée pour un fichier TypeScript/TSX
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // Gérer les fichiers TypeScript/TSX
                exclude: /node_modules/,
                use: 'ts-loader',
            },
            {
                test: /\.(js|jsx)$/, // Toujours gérer JS/JSX au cas où
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Résoudre les extensions TypeScript/TSX
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        hot: true,
    },
    mode: 'development',
};
