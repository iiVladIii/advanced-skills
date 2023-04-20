import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page className={classNames(cls.AdminPanelPage, {}, [className])}>
            Admin
        </Page>
    );
});

export default AdminPanelPage;
