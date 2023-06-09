import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { useEffect } from "react";
import { login, logout } from "../store/auth";
import { onAuthStateChanged } from "firebase/auth";


export const useCheckauth = () => {


  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);


  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, displayName, email, photoURL } = user;
      dispatch(login(uid, displayName, email, photoURL));
      
    });
  }, [])
    
    return {
        status
    }

}
