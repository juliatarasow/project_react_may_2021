import { useContext } from 'react';

import { AllContext } from "../context"
import SightCard from "../components/SightCard"
import "./sightseeing.css"


export default function Sightseeing() {

    const { sights } = useContext(AllContext);

    return (
        <div>
            <h1>Sightseeing</h1>

            <div className="Sightseeing">
                {sights.map(item => <SightCard key={item.id} {...item} />)}

            </div>

        </div>
    )
}
