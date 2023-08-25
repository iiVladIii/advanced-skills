import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const intiArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/intiArticlesPage', async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const inited = getArticlesPageInited(getState());

    if (!inited) {
        // const orderFromUrl = searchParams.get('order');
        // const searchFromUrl = searchParams.get('search');
        // const sortFromUrl = searchParams.get('sort');

        const paramsFromUrl: OptionalRecord<string, string> = {
            order: searchParams.get('order') ?? undefined,
            search: searchParams.get('search') ?? undefined,
            sort: searchParams.get('sort') ?? undefined,
            type: searchParams.get('type') ?? undefined,
        };

        Object.entries(paramsFromUrl).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                switch (key) {
                    case 'order':
                        dispatch(
                            articlesPageActions.setOrder(value as SortOrder),
                        );
                        break;
                    case 'search':
                        dispatch(articlesPageActions.setSearch(value));
                        break;
                    case 'sort':
                        dispatch(
                            articlesPageActions.setSort(
                                value as ArticleSortField,
                            ),
                        );
                        break;
                    case 'type':
                        dispatch(
                            articlesPageActions.setType(value as ArticleType),
                        );
                        break;
                    default:
                        break;
                }
            }
        });
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList({}));
    }
});
