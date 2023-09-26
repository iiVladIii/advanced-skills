import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';
import { FeatureFlagsDecorator } from '../../src/shared/config/storybook/FeaturesFlagsDecorator/FeatureFlagsDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'dark',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#fff' },
            { name: 'dark', class: Theme.DARK, color: '#000' },
            { name: 'orange', class: Theme.ORANGE, color: '#ffb005' },
        ],
    },
};

// addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);
// addDecorator(SuspenseDecorator);
export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    FeatureFlagsDecorator({}),
];
