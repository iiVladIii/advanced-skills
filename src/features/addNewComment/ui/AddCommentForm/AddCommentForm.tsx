import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getHStack, HStack } from '@/shared/ui/redesigned/Stack';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import { ToggleFeatures } from '@/shared/lib/features';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (value: string) => void;
}
const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};
const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);

    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card
                        padding="24"
                        data-testid="AddCommentForm"
                        className={classNames(
                            cls.AddCommentFormRedesigned,
                            {},
                            [
                                className,
                                getHStack({
                                    gap: '16',
                                    max: true,
                                    justify: 'between',
                                }),
                            ],
                        )}
                    >
                        <Input
                            data-testid="AddCommentForm.Input"
                            className={cls.input}
                            value={text}
                            onChange={onCommentTextChange}
                            placeholder={t('Введите текст комментария')}
                        />
                        <Button
                            data-testid="AddCommentForm.Button"
                            onClick={onSendHandler}
                        >
                            {t('Отправить')}
                        </Button>
                    </Card>
                }
                off={
                    <HStack
                        data-testid="AddCommentForm"
                        max
                        justify="between"
                        className={classNames(cls.AddCommentForm, {}, [
                            className,
                        ])}
                    >
                        <InputDeprecated
                            data-testid="AddCommentForm.Input"
                            className={cls.input}
                            value={text}
                            onChange={onCommentTextChange}
                            placeholder={t('Введите текст комментария')}
                        />
                        <ButtonDeprecated
                            data-testid="AddCommentForm.Button"
                            onClick={onSendHandler}
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
