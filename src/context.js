import { createContext, useState, useEffect } from "react";
import axios from "axios";

// importing json data to context.js, so we can use it anywhere in the project:
import { sights } from './components/SightCard/sightsData.json'


export const AllContext = createContext();


export function AllProvider({ children }) {

    const [weather, setWeather] = useState([]);

    const [covidData, setCovidData] = useState([]);


    useEffect(() => {

        // Fetching Porto weather data:
        axios.get("http://api.openweathermap.org/data/2.5/weather?q=Porto&appid=dbea5561a8dca7af021c5b3f69494469&units=metric")
            .then(res => {
                // console.log("data : ", res.data);

                if (res.data) {
                    setWeather(res.data)
                } else {
                    alert("No Response!")
                }
            })

        // Fetching Porto Covid data:
        axios.get("https://covid19.mathdro.id/api/countries/Portugal")
            .then(res => {
                // console.log("data : ", res.data);

                if (res.data) {
                    setCovidData(res.data)
                } else {
                    alert("No Response!")
                }
            })

    }, [])

    return (
        <AllContext.Provider value={{ sights, weather, covidData }}>
            {children}
        </AllContext.Provider>
    )
}