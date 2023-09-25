import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { ListBoxItem } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignedSwitcherProps {
    className?: string;
}

export const UiDesignedSwitcher = memo((props: UiDesignedSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState(false);

    const authData = useSelector(getUserAuthData);

    const isAppRedesigned = getFeatureFlag('isAppRedesigned');

    const items: ListBoxItem<string>[] = [
        {
            value: 'new',
            content: t('Новый'),
        },
        {
            value: 'old',
            content: t('Старый'),
        },
    ];

    const onChange = async (value: string) => {
        if (authData) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlag({
                    newFeatures: {
                        isAppRedesigned: value === 'new',
                    },
                    userId: authData.id,
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack>
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={100} height={40} />
            ) : (
                <ListBox
                    className={classNames('', {}, [className])}
                    items={items}
                    readonly={false}
                    value={isAppRedesigned ? 'new' : 'old'}
                    onChange={onChange}
                />
            )}
        </HStack>
    );
});
