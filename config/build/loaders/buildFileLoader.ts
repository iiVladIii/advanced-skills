import webpack from 'webpack';

export function buildFileLoader():webpack.RuleSetRule {
    return {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            { loader: 'file-loader' },
        ],
    };
}
