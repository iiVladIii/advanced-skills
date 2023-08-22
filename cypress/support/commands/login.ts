import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';

const usernameTest = Cypress.env('USER_TEST_USERNAME');
const passwordTest = Cypress.env('USER_TEST_PASSWORD');

export const login = (username: string = usernameTest ?? 'testuser', password: string = passwordTest ?? '123') => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('DEV_API_URL')}/login`,
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    });
};
