import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '../../deprecated/Button/Button';
import cls from './Code.module.scss';
import CopyIcon from '../../../assets/icons/copy-20-20.svg';
import CopyIconNew from '../../../assets/icons/copy.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <pre
                    className={classNames(cls.CodeRedesigned, {}, [className])}
                >
                    <Icon
                        clickable
                        className={cls.copyBtn}
                        onClick={onCopy}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            }
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <ButtonDeprecated
                        className={cls.copyBtn}
                        onClick={onCopy}
                        theme={ButtonTheme.CLEAR_INVERTED}
                    >
                        <CopyIcon className={cls.copyIcon} />
                    </ButtonDeprecated>
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
