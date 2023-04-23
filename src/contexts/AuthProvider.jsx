import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const [isAuthenticated, setIsAuthenticated] = useState(userInfo ? true : false);
   
    const login = (userInfo) => {
        setIsAuthenticated(true);
        localStorage.setItem("userinfo", JSON.stringify(userInfo));
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("userinfo");
    };

    const getUserInfo = () => {
        return JSON.parse(localStorage.getItem("userinfo"))
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, getUserInfo}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;