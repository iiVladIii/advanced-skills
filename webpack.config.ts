import webpack from 'webpack'
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildPaths} from "./config/build/types/config";
import path from "path";
import dotenv from 'dotenv'

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.ts'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }


    dotenv.config()

    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const PORT = env.port || Number(process.env.PORT) || 3000


    const config: webpack.Configuration = buildWebpackConfig({
        mode: mode,
        paths: paths,
        isDev: isDev,
        port: PORT
    })

    return config
}
