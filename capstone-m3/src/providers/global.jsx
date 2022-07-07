import { createContext, useState } from "react";

export const GlobalContext = createContext([])

export const GlobalProvider = ({ children }) => {

    const [userToken, setUserToken] = useState("")
    const [user, setUser] = useState ([])

    const userContext = {userToken, setUserToken, user, setUser}

    //Aqui estarão os contextos criados por todos.
    
    return (
        <GlobalContext.Provider
            value={{ userContext }}>
	        {children}
        </GlobalContext.Provider>
    )
}