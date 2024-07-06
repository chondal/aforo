import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import MyRoutes from "./router/MyRoutes";
import TagManager from "react-gtm-module";
import CryptoJS from "crypto-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const tagManagerArgs = {
    gtmId: "GTM-WJFJMQZ",
  };

  TagManager.initialize(tagManagerArgs);

  const init = () => {
    const encryptedUser = localStorage.getItem(
      "IxSTUOSGGHxIGGUOSTSHpRkapsVuWEjFPtMogVWXLpTUKIznQNnGYy"
    );

    if (encryptedUser) {
      const userDecrypt = CryptoJS.AES.decrypt(
        encryptedUser,
        process.env.REACT_APP_CRYPT_KEY
      );

      return JSON.parse(userDecrypt.toString(CryptoJS.enc.Utf8));
    }
    return {
      logged: false,
    };
  };

  const [user, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (user.logged) {
        const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user),process.env.REACT_APP_CRYPT_KEY).toString()
        localStorage.setItem("IxSTUOSGGHxIGGUOSTSHpRkapsVuWEjFPtMogVWXLpTUKIznQNnGYy",encryptedUser)
    }
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <MyRoutes />
    </AuthContext.Provider>
  );
}

export default App;
