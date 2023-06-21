import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/authByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { editableProfileCardReducer } from '@/features/editableProfileCard/model/slice/editableProfileCardSlice';
import { addCommentFormReducer } from '@/features/addNewComment/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slice';

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    profile: editableProfileCardReducer,
    articleDetails: articleDetailsReducer,
    articleDetailsPage: articleDetailsPageReducer,
    addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
    state?: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent :Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <StoryComponent />
    </StoreProvider>
);
