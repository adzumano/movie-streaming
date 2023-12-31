import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type RuleSetRule } from 'webpack'

export const buildCssLoader = (isDev: boolean): RuleSetRule => {
    return {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64:8]'
                    }
                }
            },
            'sass-loader',
            'postcss-loader'
        ]
    }
}
