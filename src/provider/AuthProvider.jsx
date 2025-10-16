import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const userEmail = "tasdidnayem@gmail.com";

  const authData = {
    userEmail,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;