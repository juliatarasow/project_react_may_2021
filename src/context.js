import {createContext, useState, useEffect} from "react";
import axios from "axios";


export const SightsContext = createContext();

export function SightsProvider({children}) {

    const [sights, setSights] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8000/sights')
        .then(res => {
            // console.log(res.data);
            setSights(res.data)
        })

    }, [])


    return (
        <SightsContext.Provider value={{sights}}>
            {children}
        </SightsContext.Provider>
    )
}

