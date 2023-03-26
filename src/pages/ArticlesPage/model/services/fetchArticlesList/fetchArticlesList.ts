import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface fetchArticlesListProps {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], fetchArticlesListProps, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
        const {
            extra,
            getState,
            rejectWithValue,
        } = thunkAPI;

        // const { page = 1 } = props;
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort,
                order,
                type,
                search,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    type: type === ArticleType.ALL ? undefined : type,
                    q: search,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            return rejectWithValue('ERROR');
        }
    },
);
