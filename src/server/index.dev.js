import express from 'express';
import path from 'path';
import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevConfig from '../../build/webpack.app.dev.babel';

const app = express();
const PORT = process.env.PORT || 3030;
const compiler = Webpack(WebpackDevConfig);

app.use(WebpackDevMiddleware(compiler, {
    publicPath: WebpackDevConfig.output.publicPath
}));
app.use(WebpackHotMiddleware(compiler));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});