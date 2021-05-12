import { useContext } from 'react';

import { SightsContext } from "../context"
import SightCard from "../components/SightCard"
import "./sightseeing.css"


export default function Sightseeing() {

    const { sights } = useContext(SightsContext);

    return (
        <div>
            <h1>Sightseeing</h1>

            <div className="Sightseeing">
                {sights.map(item => <SightCard key={item.id} {...item} />)}

            </div>

        </div>
    )
}
