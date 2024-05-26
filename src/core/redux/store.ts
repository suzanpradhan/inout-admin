import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../../modules/features/opt/cartSlice';
import { rtkQueryErrorLogger } from '../api/apiMiddleware';
import { baseApi } from '../api/apiQuery';

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: cartReducer,
            baseApi: baseApi.reducer,
        },
        middleware(getDefaultMiddleware) {
            return getDefaultMiddleware()
                .concat(baseApi.middleware)
                .concat(rtkQueryErrorLogger);
        },
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']