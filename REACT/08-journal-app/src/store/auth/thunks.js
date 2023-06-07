
import { registerUserDirecFulfilment, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";


export const checkingAuthentication = () => {

    return async (dispatch) => {
        
        dispatch(checkingCredentials());

    }
};


export const startGoogleSignIn = () => {

    return async (dispatch) => {
        
        dispatch(checkingCredentials());

        const result = await singInWithGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result));

    }
};

export const startCreatUserDirectFulfilment = (email, password, displayName) => {

    return async (dispatch) => {
        
        dispatch(checkingCredentials());

        const { ok, uid, photoURL, errorMessage } = await registerUserDirecFulfilment(email, password, displayName);
        if (!ok) return dispatch(logout({ errorMessage }));
        
        dispatch(login({ uid,email, displayName, photoURL }));

    }
};


