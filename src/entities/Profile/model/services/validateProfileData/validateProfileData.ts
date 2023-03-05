import { Profile, ValidateProfileError } from '../../type/profile';

export const validateProfileData = (profile?: Profile):ValidateProfileError[] => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        first,
        lastname,
        country,
        currency,
        city,
        avatar,
        age,
        username,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }
    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }
    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    return errors;
};
