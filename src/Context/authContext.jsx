import { createContext, useContext } from "react";
import { UserContext } from "./userContext";
import axios from "axios";

export let AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const { userData } = useContext(UserContext);

    async function resetPassword(values) {
        try {
            const { data } = await axios.patch('http://localhost:5000/api/auth/update-password', values,
                {
                    headers: {
                        Authorization: `Bearer ${userData}`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(data.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    return <AuthContext.Provider value={{resetPassword}}>
        {children}
    </AuthContext.Provider>;
};