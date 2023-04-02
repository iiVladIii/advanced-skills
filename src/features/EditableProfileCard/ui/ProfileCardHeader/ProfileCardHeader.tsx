import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { updateProfileData } from 'entities/Profile';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import {
    getEditableProfileCardReadonly,
} from '../../model/selectors/getEditableProfileCardReadonly/getEditableProfileCardReadonly';
import { editableProfileCardActions } from '../../model/slice/editableProfileCardSlice';
import {
    getEditableProfileCardData,
} from '../../model/selectors/getEditableProfileCardData/getEditableProfileCardData';

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

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getEditableProfileCardData);
    const canEdit = authData?.id === profileData?.id;

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
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Профиль')} />
            {canEdit && (
                readonly
                    ? (
                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Редактировать')}
                        </Button>
                    )
                    : (
                        <HStack gap="8">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={onCancelEdit}
                            >
                                {t('Отменить')}
                            </Button>
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onSave}
                            >
                                {t('Сохранить')}
                            </Button>
                        </HStack>

                    )
            )}
        </HStack>
    );
});
