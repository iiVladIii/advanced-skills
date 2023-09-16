import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import popupCls from '../../styles/popup.module.scss';
import { DropDownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: <T extends string>(value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export function ListBox(props: ListBoxProps) {
    const {
        items,
        className,
        defaultValue,
        value,
        onChange,
        readonly = true,
        label,
        direction = 'bottom right',
    } = props;

    const optionClasses = [mapDirectionClass[direction]];

    return (
        <HStack gap="8">
            {label && (
                <span
                    className={classNames('', { [cls.disabled]: readonly })}
                >{`${label}>`}</span>
            )}
            <HListBox
                as="div"
                disabled={readonly}
                value={value}
                className={classNames(cls.ListBox, {}, [
                    className,
                    popupCls.popup,
                ])}
                onChange={onChange}
            >
                <HListBox.Button
                    as="div"
                    // disabled={readonly}
                    className={popupCls.trigger}
                >
                    <Button disabled={readonly}>{value ?? defaultValue}</Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames(cls.options, {}, optionClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            as={Fragment}
                            disabled={item.disabled}
                            value={item.value}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
}
