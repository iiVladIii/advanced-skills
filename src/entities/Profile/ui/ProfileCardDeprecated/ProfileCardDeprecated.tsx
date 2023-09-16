import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './ProfileCardDeprecated.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import {
    Text as TextDeprecated,
    TextAlign,
    TextTheme,
} from '@/shared/ui/deprecated/Text';

export const ProfileCardDeprecatedError = memo(() => {
    const { t } = useTranslation('profile');
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <TextDeprecated
                theme={TextTheme.ERROR}
                title={t('Произошла ошибка при загрузке профлия')}
                text={t('Попробуйте обновить страницу')}
                align={TextAlign.CENTER}
            />
        </HStack>
    );
});

export const ProfileCardDeprecatedLoader = memo(() => (
    <HStack
        max
        justify="center"
        className={classNames(cls.ProfileCard, {}, [cls.loading])}
    >
        <LoaderDeprecated />
    </HStack>
));

export const ProfileCardDeprecated = memo((props: ProfileCardProps) => {
    const {
        className,
        data,
        readonly,
        onChangeLastname,
        onChangeFirstname,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;
    const { t } = useTranslation('profile');

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack
            max
            gap="16"
            className={classNames(cls.ProfileCard, mods, [className])}
        >
            {data?.avatar && (
                <HStack max justify="center" className={cls.avatarWrapper}>
                    <AvatarDeprecated src={data.avatar} />
                </HStack>
            )}
            <InputDeprecated
                value={data?.first}
                placeholder={t('Имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <InputDeprecated
                value={data?.lastname}
                readonly={readonly}
                placeholder={t('Фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <InputDeprecated
                value={data?.age}
                readonly={readonly}
                placeholder={t('Возраст')}
                className={cls.input}
                onChange={onChangeAge}
                data-testid="ProfileCard.age"
            />
            <InputDeprecated
                value={data?.city}
                readonly={readonly}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                data-testid="ProfileCard.city"
            />
            <InputDeprecated
                value={data?.username}
                readonly={readonly}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                data-testid="ProfileCard.username"
            />
            <InputDeprecated
                value={data?.avatar}
                readonly={readonly}
                placeholder={t('Ссылка на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                data-testid="ProfileCard.avatar"
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
});
