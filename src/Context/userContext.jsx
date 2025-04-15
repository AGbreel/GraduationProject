import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let UserContext = createContext();

export default function UserContextProvider({ children }) {

    const [userData, setUserData] = useState(null);
    const [userInfo, setUserInfo] = useState([]);

    async function getMe() {
        try {
            let { data } = await axios.get(`http://localhost:5000/api/users/me`, {
                headers: {
                    'Authorization': `Bearer ${userData}`
                }
            })

            setUserInfo(data.data);
            console.log("Data received => ", userInfo);
            

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            setUserData(token);
        }
    }, []);

    useEffect(() => {
        if (userData) {
            getMe();
        }
    }, [userData]);


    console.log("userData => " + userData);

    return <UserContext.Provider value={{ userData, setUserData, getMe, userInfo }}>
        {children}
    </UserContext.Provider>
}