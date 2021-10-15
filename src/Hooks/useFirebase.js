import initFirebaseConfig from "../Firebase/Firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
initFirebaseConfig();
const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // keep a state to store the user info
    const [userInfo, setUserInfo] = useState({});
    //keep a state of error to show whether the user was logged in successfully or not
    const [error, setError] = useState('');

    //fucntion for log in
    const LoginWithGoogle = () => {
        // let history = useHistory();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                // history.push("/home");
                setError("login successful");
            }).catch(error => {

            });
    }
    //fucntion for logout
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUserInfo({});
            })
            .catch((error) => {
            });
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUserInfo(user);
                // ...
            } else {
                setError('user logged out');
            }
        });
    }, [])
    return {
        LoginWithGoogle,
        userInfo,
        error,
        handleLogout
    }

}
export default useFirebase;