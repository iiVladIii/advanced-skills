import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { getVStack, HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Input } from '@/shared/ui/redesigned/Input';
import { CurrencySelect } from '@/entities/Currency';
import { CountrySelect } from '@/entities/Country';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import cls from '../ProfileCardDeprecated/ProfileCardDeprecated.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';

export const ProfileCardRedesignedError = memo(() => {
    const { t } = useTranslation();
    return (
        <HStack
            max
            justify="center"
            className={classNames(cls.ProfileCard, {}, [cls.error])}
        >
            <Text
                variant="error"
                title={t('Произошла ошибка при загрузке профлия')}
                text={t('Попробуйте обновить страницу')}
                align="center"
            />
        </HStack>
    );
});

export const ProfileCardRedesignedLoader = memo(() => (
    <Card
        fullWidth
        padding="24"
        className={getVStack({ gap: '32', align: 'center' })}
    >
        <Skeleton borderRadius="50%" width={128} height={128} />
        <HStack gap="32" max>
            <VStack max gap="16">
                <Skeleton width="100%" height={38} />
                <Skeleton width="100%" height={38} />
                <Skeleton width="100%" height={38} />
                <Skeleton width="100%" height={38} />
            </VStack>
            <VStack max gap="16">
                <Skeleton width="100%" height={38} />
                <Skeleton width="100%" height={38} />
                <Skeleton width="100%" height={38} />
                <Skeleton width="100%" height={38} />
            </VStack>
        </HStack>
    </Card>
));

export const ProfileCardRedesigned = memo((props: ProfileCardProps) => {
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

    return (
        <Card
            fullWidth
            padding="24"
            border="24"
            className={classNames('', {}, [
                className,
                getVStack({ gap: '32' }),
            ])}
        >
            {data?.avatar && (
                <HStack max justify="center">
                    <Avatar size={128} src={data.avatar} />
                </HStack>
            )}
            <HStack gap="24" max>
                <VStack gap="16" max>
                    <Input
                        value={data?.first}
                        label={t('Имя')}
                        onChange={onChangeFirstname}
                        readonly={readonly}
                        data-testid="ProfileCard.firstname"
                    />
                    <Input
                        value={data?.lastname}
                        readonly={readonly}
                        label={t('Фамилия')}
                        onChange={onChangeLastname}
                        data-testid="ProfileCard.lastname"
                    />
                    <Input
                        value={data?.age}
                        readonly={readonly}
                        label={t('Возраст')}
                        onChange={onChangeAge}
                        data-testid="ProfileCard.age"
                    />
                    <Input
                        value={data?.city}
                        readonly={readonly}
                        label={t('Город')}
                        onChange={onChangeCity}
                        data-testid="ProfileCard.city"
                    />
                </VStack>
                <VStack gap="16" max>
                    <Input
                        value={data?.username}
                        readonly={readonly}
                        label={t('Имя пользователя')}
                        onChange={onChangeUsername}
                        data-testid="ProfileCard.username"
                    />
                    <Input
                        value={data?.avatar}
                        readonly={readonly}
                        label={t('Ссылка на аватар')}
                        onChange={onChangeAvatar}
                        data-testid="ProfileCard.avatar"
                    />
                    <CurrencySelect
                        value={data?.currency}
                        onChange={onChangeCurrency}
                        readonly={readonly}
                    />
                    <CountrySelect
                        value={data?.country}
                        onChange={onChangeCountry}
                        readonly={readonly}
                    />
                </VStack>
            </HStack>
        </Card>
    );
});
