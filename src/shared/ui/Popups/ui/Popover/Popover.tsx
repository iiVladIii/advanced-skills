import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import { DropDownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import cls from './Popover.module.scss';
import clsPopup from '../../styles/popup.module.scss';

interface PopoverProps {
    className?: string
    trigger: ReactNode
    direction?: DropDownDirection;
    children: ReactNode
}

export const Popover = (props: PopoverProps) => {
    const {
        className, direction = 'bottom right', trigger, children,
    } = props;

    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, clsPopup.popup])}>
            <HPopover.Button
                className={clsPopup.trigger}
            >
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
};
