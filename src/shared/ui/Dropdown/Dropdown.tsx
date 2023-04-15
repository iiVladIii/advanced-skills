import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { AppLink } from '../AppLink/AppLink';
import cls from './Dropdown.module.scss';
import { DropDownDirection } from '../../types/ui';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode
     direction?: DropDownDirection;
}

const mapDirection:Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        items,
        trigger,
        direction = 'bottom left',
    } = props;

    const menuClasses = [mapDirection[direction]];

    return (
        <Menu
            as="div"
            className={classNames(cls.Dropdown, {}, [className])}
        >
            <Menu.Button
                className={cls.btn}
            >
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames(cls.menu, {}, menuClasses)}
            >
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => {
                        console.log(12);
                        return (
                            <button
                                type="button"
                                disabled={item.disabled}
                                className={classNames(
                                    cls.item,
                                    { [cls.active]: active },
                                )}
                            >
                                {item.content}
                            </button>
                        );
                    };

                    if (item.href) {
                        return (
                            <Menu.Item
                                as={AppLink}
                                className={classNames(
                                    cls.item,
                                )}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {item.content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
