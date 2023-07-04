module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes'],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    staticDirs: [{
        from: '../../src/shared/assets/tests',
        to: 'static/assets',
    }],
    docs: {
        autodocs: false,
    },
    features: {
        storyStoreV7: false,
    },
};
