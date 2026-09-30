import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit'

import type { AppDispatch,RootState} from './index';
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectTemplatesByStyle1 = createSelector(
    [
        (state: RootState) => state.tp.templates,
        (state: RootState, style: string) => style
    ],
    (templates,style) => templates.filter(item => item.style === style)
);
