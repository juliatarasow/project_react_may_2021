import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

import { details } from './climateData.json'

import './climateCard.css'

export default function ClimateCard2 () {
    // console.log('details', details)
  
  return (
    <CardView
      items={details}
      activeColor='rgba(48, 71, 120, 0.85)'
      imageHeight='auto'
      imageWidth='100%'
    />
  )
}
