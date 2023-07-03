import { Story } from '@storybook/react';
import React from 'react';
// @ts-ignore
import isLokiRunning from '@loki/is-loki-running';

const DisableAnimationsContext = React.createContext(false);

export const StopAnimationDecorator = (StoryComponent: Story) => (
    <DisableAnimationsContext.Provider value={isLokiRunning()}>
        <StoryComponent />
    </DisableAnimationsContext.Provider>
);
