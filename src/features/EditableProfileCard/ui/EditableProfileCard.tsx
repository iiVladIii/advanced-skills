import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { fetchProfileData, ProfileCard, ValidateProfileError } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCardHeader } from 'features/EditableProfileCard/ui/ProfileCardHeader/ProfileCardHeader';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getValidateProfileErrors } from '../model/selectors/getValidateProfileErrors/getValidateProfileErrors';
import cls from './EditableProfileCard.module.scss';
import { editableProfileCardActions, editableProfileCardReducer } from '../model/slice/editableProfileCardSlice';
import {
    getEditableProfileCardIsLoading,
} from '../model/selectors/getEditableProfileCardIsLoading/getEditableProfileCardIsLoading';
import { getEditableProfileCardForm } from '../model/selectors/getEditableProfileCardForm/getEditableProfileCardForm';
import { getEditableProfileCardError }
    from '../model/selectors/getEditableProfileCardError/getEditableProfileCardError';
import {
    getEditableProfileCardReadonly,
} from '../model/selectors/getEditableProfileCardReadonly/getEditableProfileCardReadonly';

interface EditableProfileCardProps {
    className?: string
}

const reducers: ReducersList = {
    profile: editableProfileCardReducer,
};

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEditableProfileCardIsLoading);
    const formData = useSelector(getEditableProfileCardForm);
    const error = useSelector(getEditableProfileCardError);
    const readonly = useSelector(getEditableProfileCardReadonly);
    const validateErrors = useSelector(getValidateProfileErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
        [ValidateProfileError.INCORRECT_CURRENCY]: t('Некорректная валюта'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_CITY]: t('Некорректный город'),
        [ValidateProfileError.INCORRECT_USERNAME]: t('Некорректорное имя пользователя'),
    };

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(editableProfileCardActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(editableProfileCardActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(editableProfileCardActions.updateProfile({ country }));
    }, [dispatch]);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.EditableProfileCard, {}, [className])}>
                <ProfileCardHeader />
                {validateErrors?.length && validateErrors.map((error) => (
                    <Text
                        key={error}
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
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
            </div>
        </DynamicModuleLoader>
    );
};
