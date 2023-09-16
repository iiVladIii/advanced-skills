import { getStackClasses } from './getStackClasses';
import { StackOptions } from '../types/types';

export function getHStack(option: StackOptions): string {
    return getStackClasses({ ...option, direction: 'row' }).join(' ');
}
