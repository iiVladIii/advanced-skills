import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { counterValue: 100 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(100);
    });
});
