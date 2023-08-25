import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

const usernameTest = Cypress.env('USER_TEST_USERNAME');
const passwordTest = Cypress.env('USER_TEST_PASSWORD');

export const login = (
    username: string = usernameTest ?? 'testuser',
    password: string = passwordTest ?? '123',
) =>
    cy
        .request({
            method: 'POST',
            url: `${Cypress.env('DEV_API_URL')}/login`,
            body: {
                username,
                password,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );
            return body;
        });

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
