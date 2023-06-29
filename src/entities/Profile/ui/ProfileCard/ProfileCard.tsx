import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Loader } from '@/shared/ui/Loader';
import { Avatar } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Profile } from '../../model/type/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?:boolean;
    error: string | undefined;
    readonly?: boolean
    onChangeFirstname?: (value?:string) => void;
    onChangeLastname?: (value?:string) => void;
    onChangeCity?: (value?:string) => void;
    onChangeAge?: (value?:string) => void;
    onChangeUsername?: (value?:string) => void;
    onChangeAvatar?: (value?:string) => void;
    onChangeCurrency?: (currency:Currency) => void;
    onChangeCountry?: (country:Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        readonly,
        error,
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

    if (isLoading) {
        return (
            <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack max justify="center" className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профлия')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack max gap="16" className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar
                        && (
                            <HStack max justify="center" className={cls.avatarWrapper}>
                                <Avatar
                                    src={data.avatar}
                                />
                            </HStack>
                        )}
            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
                data-testid="ProfileCard.firstname"
            />
            <Input
                value={data?.lastname}
                readonly={readonly}
                placeholder={t('Ваша фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                data-testid="ProfileCard.lastname"
            />
            <Input
                value={data?.age}
                readonly={readonly}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                data-testid="ProfileCard.age"
            />
            <Input
                value={data?.city}
                readonly={readonly}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                data-testid="ProfileCard.city"
            />
            <Input
                value={data?.username}
                readonly={readonly}
                placeholder={t('Имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                data-testid="ProfileCard.username"
            />
            <Input
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
};
