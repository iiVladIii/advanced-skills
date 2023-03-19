import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/home-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList : SidebarItemType[] = [
            {
                path: RouterPath.main,
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: RouterPath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];
        if (userData) {
            sidebarItemsList.push(
                {
                    path: RouterPath.profile + userData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RouterPath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sidebarItemsList;
    },
);
