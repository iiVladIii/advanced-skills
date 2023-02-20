import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { counterValue: 100 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ counterValue: 100 });
    });
});
