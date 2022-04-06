const path = require('path');
const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.tsx',
    output: {
        // バンドルしてmain.jsとして出力
        filename: 'main.js',
        path: outputPath
    },
    devServer: {
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                // 拡張子 .ts の場合
                test: /\.tsx$/,
                // TypeScript をコンパイルする
                use: 'ts-loader',
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false }
                    }
                ]
            }
        ],
    },
    // import 文で .ts ファイルを解決するため
    // これを定義しないと import 文で拡張子を書く必要が生まれる。
    // フロントエンドの開発では拡張子を省略することが多いので、
    // 記載したほうがトラブルに巻き込まれにくい。
    resolve: {
        // 拡張子を配列で指定
        extensions: [
            '.ts', '.js','jsx','.tsx','.css','.scss'
        ],
    },
};