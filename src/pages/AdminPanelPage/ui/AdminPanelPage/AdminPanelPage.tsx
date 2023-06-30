import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    return (
        <Page
            data-testid="AdminPanelPage"
            className={classNames(cls.AdminPanelPage, {}, [className])}
            // eslint-disable-next-line i18next/no-literal-string
        >
            Admin
        </Page>
    );
});

export default AdminPanelPage;
