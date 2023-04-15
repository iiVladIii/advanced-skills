module.exports = (componentName) => (`import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './Dropdown.module.scss';

interface ${componentName}Props {
    className?: string
}

export const Dropdown = memo((props: ${componentName}Props) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
            
        </div>
    );
});`);
