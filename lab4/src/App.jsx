
import { createContext, useEffect, useState } from 'react'
import AllRoutes from './routes/AllRoutes'
import { userApi } from './api/userApi';
import { instance } from './api/axiosCilents';
export const userContext = createContext();

function App() {
  const [tokenAuth, setTokenAuth] = useState('');
  const [dataUser, setDataUser] = useState({});
  const token = (token) => {
    setTokenAuth(token);
  }
  const fetchApi = async () => {
    try {
      const result = await userApi.getInforUser();
      console.log(result);
      setDataUser(result);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log("Updated tokenAuth:", tokenAuth);
    if (tokenAuth) {
        localStorage.setItem("tokenAuth", tokenAuth);
        instance.defaults.headers.Authorization = `Bearer ${tokenAuth}`;
        fetchApi();
    } else {
        localStorage.removeItem("tokenAuth");
        console.log("Token removed from localStorage");
    }
}, [tokenAuth]);

  return (
<userContext.Provider value={{ setTokenAuth, tokenAuth, dataUser }}>
<AllRoutes />
    </userContext.Provider>
  )
}

export default App
