import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { getVStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignedSwitcher } from '@/features/uiDesignedSwitcher';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('settings');

    return (
        <Page
            className={classNames('', {}, [
                className,
                getVStack({ gap: '16' }),
            ])}
        >
            <Text title={t('Настройки пользователя')} />
            <UiDesignedSwitcher />
        </Page>
    );
});

export default SettingsPage;
