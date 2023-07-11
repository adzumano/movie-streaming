import { type RuleSetRule } from 'webpack'

export const buildTsLoader = (): RuleSetRule => {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
}
