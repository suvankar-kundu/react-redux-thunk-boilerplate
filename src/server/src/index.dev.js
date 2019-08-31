import appLication from './service/app';
import path from 'path';
import initDb from './service/init/init-db';
import dbConfig from '../config/development/db.json';
import logConfig from '../config/development/log.json';
import corsConfig from '../config/development/cors.json';
import securityConfig from '../config/development/security.json';

import Webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import WebpackDevConfig from '../../../build/webpack.app.dev.babel';

//#region Common components
import ApplicationLogger from './common/lib/logger';
//#endregion
const PORT = process.env.PORT || 5000;
Promise.all([
    initDb(dbConfig.cnd)
]).then(async ([dbConnection]) => {

    const compiler = Webpack(WebpackDevConfig);
    const logger = new ApplicationLogger(logConfig);
    const app = await appLication(logger, dbConnection, corsConfig, securityConfig);


    app.use(WebpackDevMiddleware(compiler, {
        publicPath: WebpackDevConfig.output.publicPath
    }));
    app.use(WebpackHotMiddleware(compiler));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../index.html'));
    });

    app.listen(PORT, () => {
        logger.info(`Server started on port ${PORT}`);
    });
    process.on('SIGINT', async () => {
        await dbConnection.close();
    });
}).catch(err => {
    console.log('An error occurred while initializing the application.', err);
});