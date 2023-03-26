import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { intiArticlesPage } from './intiArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
    test('_inited: false', async () => {
        const thunk = new TestAsyncThunk(intiArticlesPage, {
            articlesPage: {
                _inited: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
    });
    test('_inited: true', async () => {
        const thunk = new TestAsyncThunk(intiArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
    });
});
