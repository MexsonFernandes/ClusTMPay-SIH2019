var BundleTracker  = require('webpack-bundle-tracker');
//...

module.exports = {

    plugins: [
          new BundleTracker({path: "../", filename: 'webpack-stats.json'}),
    ]
}