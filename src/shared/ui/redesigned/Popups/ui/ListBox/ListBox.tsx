import { Fragment, ReactNode, useMemo } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button/Button';
import cls from './ListBox.module.scss';
import clsPopup from '../../styles/popup.module.scss';
import { DropDownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../styles/consts';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { Icon } from '../../../Icon';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropDownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
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

    const optionClasses = [mapDirectionClass[direction], clsPopup.menu];

    const selectedItem = useMemo(
        () => items?.find((item) => item.value === value),
        [items, value],
    );
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
                    clsPopup.popup,
                ])}
                onChange={onChange}
            >
                <HListBox.Button
                    as={Button}
                    className={clsPopup.trigger}
                    addonRight={<Icon Svg={ArrowIcon} />}
                    variant="filled"
                    // @ts-ignore
                    disabled={readonly}
                >
                    {selectedItem?.content ?? defaultValue}
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
                                        [clsPopup.active]: active,
                                        [clsPopup.disabled]: item.disabled,
                                        [clsPopup.selected]: selected,
                                    })}
                                >
                                    {selected}
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
