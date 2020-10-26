const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../travvy-server/public'),
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:5000'
            }
        }
    }
}