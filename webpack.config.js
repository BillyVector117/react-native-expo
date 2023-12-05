const path = require('path')
const createExpWebpackConfigAsync = requite('@expo/webpack-config')

module.exports = async function (env, argv) {
    const config = await createExpWebpackConfigAsync(env, argv)
    config.module.rules.push({
        text: /\.js&/,
        loader: 'babel-loader',
        include: [
            path.join(_dirname, 'node_modules/react-router-native')
        ]
    })
    return config
}
