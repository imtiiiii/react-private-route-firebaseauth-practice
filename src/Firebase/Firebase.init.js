import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.cofig";

const initFirebaseConfig = () => {
    initializeApp(firebaseConfig);
}
export default initFirebaseConfig;