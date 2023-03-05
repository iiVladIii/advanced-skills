// import { classNames } from 'shared/lib/classNames/classNames';
// import { useTranslation } from 'react-i18next';
// import { fetchProfileData, profileActions, ProfileCard } from 'entities/Profile';
// import { useCallback, useEffect } from 'react';
// import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
// import { ProfileCardHeader } from './ProfileCardHeader/ProfileCardHeader';
// import cls from './EditableProfileCard.module.scss';
// import { editableProfileCardSliceActions } from '../model/slice/editableProfileCardSlice';
//
// interface EditableProfileCardProps {
//     className?: string
// }
//
// export const EditableProfileCard = (props: EditableProfileCardProps) => {
//     const {
//         className,
//     } = props;
//     const { t } = useTranslation();
//     const dispatch = useAppDispatch();
//
//     const onChangeFirstname = useCallback((value?: string) => {
//         dispatch(editableProfileCardSliceActions.updateProfile({ first: value || '' }));
//     }, [dispatch]);
//
//     const onChangeLastname = useCallback((value?: string) => {
//         dispatch(editableProfileCardSliceActions.updateProfile({ lastname: value || '' }));
//     }, [dispatch]);
//
//     const onChangeCity = useCallback((value?: string) => {
//         dispatch(editableProfileCardSliceActions.updateProfile({ city: value || '' }));
//     }, [dispatch]);
//
//     const onChangeAge = useCallback((value?: string) => {
//         dispatch(editableProfileCardSliceActions.updateProfile({ age: Number(value) || 0 }));
//     }, [dispatch]);
//
//     useEffect(() => {
//         dispatch(fetchProfileData());
//     }, [dispatch]);
//
//     return (
//         <div className={classNames(cls.EditableProfileCard, {}, [className])}>
//             <ProfileCardHeader />
//             {/* <ProfileCard */}
//             {/*    error={} */}
//             {/*    readonly={} */}
//             {/*    onChangeFirstname={onChangeFirstname} */}
//             {/*    onChangeLastname={onChangeLastname} */}
//             {/*    onChangeCity={onChangeCity} */}
//             {/*    onChangeAge={onChangeAge} */}
//
//             {/* /> */}
//         </div>
//     );
// };
