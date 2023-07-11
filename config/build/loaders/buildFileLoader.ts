import { type RuleSetRule } from 'webpack'

export const buildFileLoader = (): RuleSetRule => {
   return {
       test: /\.(png|jpe?g|gif|woff2|woff)$/i,
       use: [
           {
               loader: 'file-loader',
               options: {
                   outputPath: 'images',
               },
           }
       ]
   }
}
