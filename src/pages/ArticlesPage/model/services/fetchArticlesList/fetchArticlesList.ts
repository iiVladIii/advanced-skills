import { ThunkConfig } from 'app/providers/StoreProvider';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchArticlesList',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;
        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                },
            });

            if (!response.data) {
                throw new Error();
            }

            console.log(response.data);
            return response.data;
        } catch (e) {
            return rejectWithValue('ERROR');
        }
    },
);
