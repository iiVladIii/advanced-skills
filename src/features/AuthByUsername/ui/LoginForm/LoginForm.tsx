import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getIsLoading } from 'features/AuthByUsername/model/selectors/getIsLoading/getIsLoading';
import { getError } from 'features/AuthByUsername/model/selectors/getError/getError';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    const onChangeUsername = useCallback((value:string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value:string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && (
                <Text
                    text={t('Вы ввели неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                autoFocus
                type="text"
                className={cls.input}
                onChange={onChangeUsername}
                placeholder={t('Введите username')}
                value={username}
            />
            <Input
                type="text"
                className={cls.input}
                onChange={onChangePassword}
                placeholder={t('Введите пароль')}
                value={password}
            />
            <Button
                theme={ButtonTheme.OUTLINE}
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
