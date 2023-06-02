import { configureStore } from '@reduxjs/toolkit'
  
export const store = configureStore({

    name: 'auht',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },

    reducer: {
        

    },
    

});