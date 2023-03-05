import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback, useEffect } from 'react';
import { fetchProfileData, ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { ProfileCardHeader } from 'features/EditableProfileCard/ui/ProfileCardHeader/ProfileCardHeader';
import cls from './EditableProfileCard.module.scss';
import { editableProfileCardActions } from '../model/slice/editableProfileCardSlice';
import {
    getEditableProfileCardIsLoading,
} from '../model/selectors/getEditableProfileCardIsLoading/getEditableProfileCardIsLoading';
import {
    getEditableProfileCardForm,
} from '../model/selectors/getEditableProfileCardForm/getEditableProfileCardForm';
import {
    getEditableProfileCardError,
} from '../model/selectors/getEditableProfileCardError/getEditableProfileCardError';
import {
    getEditableProfileCardReadonly,
} from '../model/selectors/getEditableProfileCardReadonly/getEditableProfileCardReadonly';

interface EditableProfileCardProps {
    className?: string
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getEditableProfileCardIsLoading);
    const formData = useSelector(getEditableProfileCardForm);
    const error = useSelector(getEditableProfileCardError);
    const readonly = useSelector(getEditableProfileCardReadonly);

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
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.EditableProfileCard, {}, [className])}>
            <ProfileCardHeader />
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
    );
};
