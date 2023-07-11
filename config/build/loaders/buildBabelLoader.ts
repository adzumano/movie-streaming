import { type RuleSetRule } from 'webpack'

export const buildBabelLoader = (): RuleSetRule => {
    return {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
}
