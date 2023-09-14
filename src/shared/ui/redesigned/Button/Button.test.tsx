import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('Test Render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('test clear theme', () => {
        render(<Button variant="outline">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('outline');
        // screen.debug();
    });
});
