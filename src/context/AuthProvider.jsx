import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(()=> {
  
  const vision_token = localStorage.getItem("vision_token")

  if(vision_token)
  return{
    vision_token, 
    isAuth:true,
  }
return {
  vision_token:'',
  isAuth:false,
}

})
  

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuth, AuthProvider}