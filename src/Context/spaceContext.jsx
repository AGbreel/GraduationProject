import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";

export let SpaceContext = createContext();

export default function SpaceContextProvider({ children }) {

    const [spaceData, setSpaceData] = useState([]);
    const { userData } = useContext(UserContext);

    async function getSpaces() {
        try {
            let { data } = await axios.get(`http://localhost:5000/api/spaces`, {
                headers: {
                    'Authorization': `Bearer ${userData}`
                }
            })

            setSpaceData(data.data);
            console.log("Data received:", spaceData);

        } catch (err) {
            console.log(err);
        }
    }

    async function createSpace(values) {
        try {
            let { data } = await axios.post(`http://localhost:5000/api/spaces`, values, {
                headers: {
                    'Authorization': `Bearer ${userData}`
                }
            })

            console.log(data.data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (userData) {
            getSpaces();
        }
    }, [userData]);




    return <SpaceContext.Provider value={{ spaceData, setSpaceData, getSpaces, createSpace }}>
        {children}
    </SpaceContext.Provider>
}
