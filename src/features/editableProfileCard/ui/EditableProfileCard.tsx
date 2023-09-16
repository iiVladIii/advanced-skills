import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextTheme } from '@/shared/ui/deprecated/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ProfileCard } from '@/entities/Profile';
import { ValidateProfileError } from '../model/consts/consts';
import { ProfileCardHeader } from './ProfileCardHeader/ProfileCardHeader';
import { getEditableProfileCardError } from '../model/selectors/getEditableProfileCardError/getEditableProfileCardError';
import { getValidateProfileErrors } from '../model/selectors/getValidateProfileErrors/getValidateProfileErrors';
import {
    editableProfileCardActions,
    editableProfileCardReducer,
} from '../model/slice/editableProfileCardSlice';
import { getEditableProfileCardIsLoading } from '../model/selectors/getEditableProfileCardIsLoading/getEditableProfileCardIsLoading';
import { getEditableProfileCardForm } from '../model/selectors/getEditableProfileCardForm/getEditableProfileCardForm';
import { getEditableProfileCardReadonly } from '../model/selectors/getEditableProfileCardReadonly/getEditableProfileCardReadonly';
import { fetchProfileData } from '../model/services/fetchProfileData/fetchProfileData';
import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: editableProfileCardReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const { className, id } = props;
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const { t } = useTranslation('profile');
    const isLoading = useSelector(getEditableProfileCardIsLoading);
    const formData = useSelector(getEditableProfileCardForm);
    const error = useSelector(getEditableProfileCardError);
    const readonly = useSelector(getEditableProfileCardReadonly);
    const validateErrors = useSelector(getValidateProfileErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'Серверная ошибка при сохранении',
        ),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Некорректная валюта'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t(
            'Имя и фамилия обязательны',
        ),
        [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateProfileError.INCORRECT_USERNAME]: t(
            'Некорректорное имя пользователя',
        ),
    };

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    first: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    lastname: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    city: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    age: Number(value) || 0,
                }),
            );
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    username: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    avatar: value || '',
                }),
            );
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    currency,
                }),
            );
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(
                editableProfileCardActions.updateProfile({
                    country,
                }),
            );
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <VStack
                gap="16"
                // align="center"
                max
                className={classNames(cls.EditableProfileCard, {}, [className])}
            >
                <ProfileCardHeader />
                {validateErrors?.length &&
                    validateErrors.map((error) => (
                        <Text
                            key={error}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[error]}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                    readonly={readonly}
                />
            </VStack>
        </DynamicModuleLoader>
    );
};
