import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная страница')}
            <StarRating size={50} />
        </Page>
    );
};

export default MainPage;
