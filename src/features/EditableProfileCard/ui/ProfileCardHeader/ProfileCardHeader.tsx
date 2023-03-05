import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { updateProfileData } from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import cls from './ProfileCardHeader.module.scss';
import {
    getEditableProfileCardReadonly,
} from '../../model/selectors/getEditableProfileCardReadonly/getEditableProfileCardReadonly';
import { editableProfileCardActions } from '../../model/slice/editableProfileCardSlice';

interface ProfileCardHeaderProps {
    className?: string
}

export const ProfileCardHeader = memo((props: ProfileCardHeaderProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const readonly = useSelector(getEditableProfileCardReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(editableProfileCardActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(editableProfileCardActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfileCardHeader, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        className={cls.editBtn}
                        onClick={onEdit}
                    >
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            className={cls.editBtn}
                            onClick={onCancelEdit}
                        >
                            {t('Отменить')}
                        </Button>
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            className={cls.saveBtn}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    </>

                )}

        </div>
    );
});
