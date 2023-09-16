import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '../../../assets/icons/user-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = (props: AvatarProps) => {
    const { className, src, size, alt } = props;

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const errorFallback = <Icon Svg={UserIcon} width={size} height={size} />;
    const fallback = <Skeleton width={size} height={size} borderRadius="50%" />;

    return (
        <AppImage
            className={classNames(cls.Avatar, {}, [className])}
            style={styles}
            src={src}
            alt={alt}
            fallback={fallback}
            errorFallback={errorFallback}
        />
    );
};
