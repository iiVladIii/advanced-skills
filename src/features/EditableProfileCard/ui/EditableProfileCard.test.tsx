import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile, ProfileCard } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { EditableProfileCard } from './EditableProfileCard';
import { editableProfileCardReducer } from '../model/slice/editableProfileCardSlice';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.EUR,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        user: {
            authData: {
                id: '1',
            },
        },
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
    },
    asyncReducers: {
        profile: editableProfileCardReducer,
    },
};

describe('features/EditableProfileCard', () => {
    test('Readonly mode must toggle', async () => {
        componentRender(<EditableProfileCard />, options);
        await userEvent.click(screen.getByTestId('ProfileCardHeader.EditButton'));
        expect(screen.getByTestId('ProfileCardHeader.CancelButton')).toBeInTheDocument();
        expect(screen.getByTestId('ProfileCardHeader.SaveButton')).toBeInTheDocument();
    });

    test('При отмене значения обнуляются', async () => {
        componentRender(<EditableProfileCard />, options);
        await userEvent.click(screen.getByTestId('ProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
        await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user');

        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

        await userEvent.click(screen.getByTestId('ProfileCardHeader.CancelButton'));
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Должна появляться ошибка', async () => {
        componentRender(<EditableProfileCard />, options);
        await userEvent.click(screen.getByTestId('ProfileCardHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(screen.getByTestId('ProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
        // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });

    test('Если нет ошибок, то на сервер должен уйти PUT запрос', async () => {
        const mockPutRequest = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard />, options);
        await userEvent.click(screen.getByTestId('ProfileCardHeader.EditButton'));

        await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

        await userEvent.click(screen.getByTestId('ProfileCardHeader.SaveButton'));

        expect(mockPutRequest).toHaveBeenCalled();
        // expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin');
    });
});
