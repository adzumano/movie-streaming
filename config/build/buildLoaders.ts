import { type RuleSetRule } from 'webpack'

import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { type BuildOptions } from './types/config'
import {buildFileLoader} from "./loaders/buildFileLoader";
import {buildBabelLoader} from "./loaders/buildBabelLoader";
import {buildTsLoader} from "./loaders/buildTsLoader";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
    const tsLoader = buildTsLoader()

    const babelLoader = buildBabelLoader()

    const cssLoader = buildCssLoader(isDev)

    const svgLoader = buildSvgLoader()

    const fileLoader = buildFileLoader()
    return [babelLoader, tsLoader, cssLoader, svgLoader, fileLoader]
}
