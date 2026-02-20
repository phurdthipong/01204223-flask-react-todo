import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem("username") || null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || null);

  const login = (username, token) => {
    localStorage.setItem("username", username);
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
    setUsername(username);
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    setUsername(null);
  };

  return (
    <AuthProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={children} />
          <Route path="/login" element={<LoginForm loginUrl={TODOLIST_LOGIN_URL} />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export const useAuth = () => useContext(AuthContext);