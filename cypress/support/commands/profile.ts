export const updateProfile = (firstname: string = 'new', lastname: string = 'lastname') => {
    cy.getByTestId('ProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('ProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `${Cypress.env('DEV_API_URL')}/profile/${profileId}`,
    headers: { Authorization: 'sdsd' },
    body: {
        id: '3',
        first: 'test',
        lastname: 'test-lastname',
        age: 100,
        currency: 'RUB',
        country: 'Russia',
        city: 'Moscow',
        username: 'usertest',
        // eslint-disable-next-line max-len
        avatar: 'https://deiquitos.com/wp-content/uploads/2022/12/anonymous-man-in-a-black-hoodie-and-neon-mask-hacking-into-a-computer-scaled-1.jpg',
    },
});

//

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname?:string, lastname?:string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
