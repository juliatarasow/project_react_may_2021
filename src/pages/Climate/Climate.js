
// import { useContext } from 'react';
// import { SightsContext } from "../context"

import ClimateCard2 from '../../components/ClimateComp/ClimateCard2.jsx'

import './Climate.css'


export default function Climate() {

    // const { weather } = useContext(SightsContext);
    
        
    return (
        <div>
            <h1>Climate</h1>
        
        <div className="Climate">

            <p><b>Porto</b> and its metropolitan area feature a <b>Mediterranean climate</b> (Köppen: Csb) with mild wet winters and warm dry summers. According to the Troll-Paffen climate classification, Porto has a <b>warm-temperate subtropical climate</b> (Warmgemäßigt-subtropisches Zonenklima), and a <i>subtropical climate</i> according to Siegmund/Frankenberg. Porto is the wettest major city with a Mediterranean climate.</p>

            <ClimateCard2 />
        </div>
        </div>
    )
}
