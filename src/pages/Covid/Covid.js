import React from 'react'

import { useContext } from 'react';

import { AllContext } from "../../context";
import './Covid.css';


export default function Covid() {
    const { covidData } = useContext(AllContext);

    if (covidData.recovered) {
        return (
            <div>
                <h1>
                    Covid Current Status
                </h1>
                <div className="Covid">
                    <h2>
                        Recovered : {covidData.recovered.value}
                    </h2>
                    <h2>
                        Active Cases : {covidData.confirmed.value - covidData.recovered.value - covidData.deaths.value}
                    </h2>
                    <p>
                        Last Updated : {covidData.lastUpdate}
                    </p>
                </div>

            </div>
        )
    } else {
        return (
            <div className="Covid">
                Loading COVID DATA...
            </div>
        )
    }
}
