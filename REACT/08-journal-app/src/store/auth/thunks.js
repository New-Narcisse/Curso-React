import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";


export const checkingAuthentication = () => {

    return async (dispatch) => {
        
        dispatch(checkingCredentials());

    }
};


export const startGoogleSignIn = () => {

    return async (dispatch) => {
        
        dispatch(checkingCredentials());

        const result = signInWithGoogle();
        // console.log(result);
        

    }
};

