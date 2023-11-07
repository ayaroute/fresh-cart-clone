import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();
export default function UserContextProvider(props) {

    // const [userToken, setUserToken] = useState(null);
   
    


    let [userToken, setUserToken] = useState(localStorage.getItem("token")?true:false)
    // let [userIsLoggedIn, setUserIsLoggedIn] = useState(localStorage.getItem("token")?true:false)


    // // useEffect(() => {
    //   if (localStorage.getItem('userToken') !== null) {
    //     setUserToken(localStorage.getItem('userToken'))
    //   }
    // }, []);


 return <UserContext.Provider value={{userToken,setUserToken}} >

        {props.children}

    </UserContext.Provider>


}

