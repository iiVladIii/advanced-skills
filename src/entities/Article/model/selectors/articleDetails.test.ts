import { StateSchema } from 'app/providers/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from './articleDetails';
import { Article, ArticleBlockType, ArticleType } from '../types/article';

const article: Article = {
    id: '1',
    user: {
        id: '1',
        username: 'username',
        avatar: 'avatar',
    },
    title: 'JavaScript news',
    subtitle: 'Что нового в js pf 2022 год ?',
    img: 'https://i.pinimg.com/originals/68/d9/1a/68d91a4a0c40857674fbd3a22b9f0b03.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },
    ],
};

describe('articleDetails.test', () => {
    test('should return data', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
                error: 'error',
                data: article,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
    });

    test('should return is loading true', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
                error: 'error',
                data: article,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state date', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test('should work with empty state is loading', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error',
                data: article,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
    });

    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
                error: 'error',
                data: article,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual('error');
    });

    test('should return empty state error', () => {
        const state:DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
                data: article,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
    });
});
