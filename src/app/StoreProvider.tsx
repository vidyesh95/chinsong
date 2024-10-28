'use client'
import {store} from '@/lib/store/store'
import {Provider} from 'react-redux'
import React, {ReactNode} from 'react';

const StoreProvider = (
    {children}: { children: ReactNode }
) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default StoreProvider;