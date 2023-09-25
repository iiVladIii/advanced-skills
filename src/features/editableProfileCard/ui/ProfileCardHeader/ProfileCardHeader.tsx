import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';

import { Button } from '@/shared/ui/redesigned/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getHStack, HStack } from '@/shared/ui/redesigned/Stack';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getEditableProfileCardReadonly } from '../../model/selectors/getEditableProfileCardReadonly/getEditableProfileCardReadonly';
import { editableProfileCardActions } from '../../model/slice/editableProfileCardSlice';
import { getEditableProfileCardData } from '../../model/selectors/getEditableProfileCardData/getEditableProfileCardData';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface ProfileCardHeaderProps {
    className?: string;
}

export const ProfileCardHeader = memo((props: ProfileCardHeaderProps) => {
    const { className } = props;
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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card
                    fullWidth
                    padding="24"
                    className={classNames('', {}, [
                        className,
                        getHStack({ justify: 'between' }),
                    ])}
                    border="24"
                >
                    <Text title={t('Профиль')} />
                    {canEdit &&
                        (readonly ? (
                            <Button
                                onClick={onEdit}
                                data-testid="ProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    color="error"
                                    onClick={onCancelEdit}
                                    data-testid="ProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </Button>
                                <Button
                                    color="success"
                                    onClick={onSave}
                                    data-testid="ProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </Button>
                            </HStack>
                        ))}
                </Card>
            }
            off={
                <HStack
                    max
                    justify="between"
                    className={classNames('', {}, [className])}
                >
                    <TextDeprecated title={t('Профиль')} />
                    {canEdit &&
                        (readonly ? (
                            <ButtonDeprecated
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="ProfileCardHeader.EditButton"
                            >
                                {t('Редактировать')}
                            </ButtonDeprecated>
                        ) : (
                            <HStack gap="8">
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="ProfileCardHeader.CancelButton"
                                >
                                    {t('Отменить')}
                                </ButtonDeprecated>
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="ProfileCardHeader.SaveButton"
                                >
                                    {t('Сохранить')}
                                </ButtonDeprecated>
                            </HStack>
                        ))}
                </HStack>
            }
        />
    );
});
