import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox, Transition } from '@headlessui/react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { HStack } from '../Stack';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropDownDirection = 'top' | 'bottom';

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange?: <T extends string>(value:T)=> void
    readonly?: boolean;
    direction?: DropDownDirection;
    label?:string;
}

const mapDirection:Record<DropDownDirection, string> = {
    bottom: cls.optionsBottom,
    top: cls.optionsTop,
};

export function ListBox(props:ListBoxProps) {
    const {
        items,
        className,
        defaultValue,
        value,
        onChange,
        readonly = true,
        label,
        direction = 'bottom',
    } = props;

    const optionClasses = [mapDirection[direction]];

    return (
        <HStack gap="8">
            {label && <span className={classNames('', { [cls.disabled]: readonly })}>{`${label}>`}</span>}
            <HListBox
                as="div"
                disabled={readonly}
                value={value}
                className={classNames(cls.ListBox, {}, [className])}
                onChange={onChange}
            >
                <HListBox.Button
                    as="div"
                    // disabled={readonly}
                    className={cls.trigger}
                >
                    <Button
                        disabled={readonly}
                    >
                        {value ?? defaultValue}
                    </Button>
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
                                    className={classNames(
                                        cls.item,
                                        {
                                            [cls.active]: active,
                                            [cls.disabled]: item.disabled,
                                        },
                                    )}
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
