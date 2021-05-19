import { useState, useEffect } from 'react';

export default function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div className="Clock">
            <p>{date.toLocaleTimeString('en-GB', { timeZone: 'Europe/Lisbon' })}</p>
            
            <div>Porto time</div>
        </div>
    );
}