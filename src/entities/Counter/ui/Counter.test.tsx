import { screen, fireEvent } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter.test', () => {
    test('Test Render', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    counterValue: 100,
                },
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('100');
    });

    test('increment', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    counterValue: 100,
                },
            },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('101');
    });
    test('decrement', () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    counterValue: 100,
                },
            },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('99');
    });
});
