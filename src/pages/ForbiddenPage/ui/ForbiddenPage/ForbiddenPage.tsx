import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
}

const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames(cls.ForbiddenPage, {}, [className])}
        >
            {t('У вас нет доступа к этой странице')}
        </Page>
    );
});

export default ForbiddenPage;
