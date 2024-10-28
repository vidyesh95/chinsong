import {configureStore} from '@reduxjs/toolkit'

/**
 * This is the store configuration file. It is used to create the Redux store.
 * The store is the object that holds the state of the application.
 * The configureStore function takes an object as an argument that contains the root reducer.
 * The root reducer is an object that contains all the reducers that are used in the application.
 *
 * store variable is exported so that it can be used in other files.
 *
 * param reducer: The root reducer object that contains all the reducers.
 * return: The Redux store object.
 */
export const store = configureStore({
    reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
