import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildFileLoader } from './loaders/buildFileLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const svgLoader = buildSvgLoader();

    const fileLoader = buildFileLoader();

    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

    const cssLoaders = buildCssLoader(options.isDev);
    return [
        // babelLoader,
        // typescriptLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoaders,
        svgLoader,
        fileLoader,
    ];
}
