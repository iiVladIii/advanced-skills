import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const ReduxDecorator = (
    initialState?: DeepPartial<StateSchema>,
) => (StoryComponent :Story) => (
    <StoreProvider initialState={initialState}>
        <StoryComponent />
    </StoreProvider>
);
