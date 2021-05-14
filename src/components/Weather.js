import { useContext } from 'react';
import { AllContext } from "../context"


export default function Weather() {

    const { weather } = useContext(AllContext);

    if (weather.main) {
        return (
            <div className="Weather">
                <div>
                    {weather.main.temp > 0 ? '+' + Math.ceil(weather.main.temp) + "° C" : "-" + Math.floor(weather.main.temp) + "° C"}
                    
                    <img src={"http://openweathermap.org/img/wn/"+weather.weather[0].icon+".png"} alt={weather.weather[0].icon}  />
                </div>

                <div>
                    {weather.weather[0].main} : {weather.weather[0].description} <br />
                </div>
            </div>
        )
    } else {
        return (
            <div className="Weather">
                Loading Weather...
            </div>
        )
    }
}
