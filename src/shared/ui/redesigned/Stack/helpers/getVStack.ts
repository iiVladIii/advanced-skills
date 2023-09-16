import { getStackClasses } from './getStackClasses';
import { StackOptions } from '../types/types';

export function getVStack(option: StackOptions): string {
    return getStackClasses({
        align: 'start',
        ...option,
        direction: 'column',
    }).join(' ');
}
