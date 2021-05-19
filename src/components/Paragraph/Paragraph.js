import React from 'react'
import './Paragraph.css'

export default function Paragraph(props) {
    return (
        <div>
            <h3>{props.head}</h3>
            <img src={props.img} />
            <p>{props.text}</p>
        </div>
    )
}

