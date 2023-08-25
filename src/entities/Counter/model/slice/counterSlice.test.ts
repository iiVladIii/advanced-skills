import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = {
            counterValue: 100,
        };
        expect(counterReducer(state, counterActions.decrement())).toEqual({
            counterValue: 99,
        });
    });
    test('increment', () => {
        const state: CounterSchema = {
            counterValue: 100,
        };
        expect(counterReducer(state, counterActions.increment())).toEqual({
            counterValue: 101,
        });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            counterValue: 1,
        });
    });
});
