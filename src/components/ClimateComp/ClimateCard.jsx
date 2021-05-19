import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

import './climateCard.css'

const ClimateCard = () => {
  const items = [
    {
      id: 1,
      header: 'Temperature',
      description:
        'Normally, Porto has generally moderate temperatures. The average annual high is around 20 °C and average low around 11 °C, ranging from a maxima of 14 °C in January to 25-26 °C in August, minima is around 5-6 °C in January and 15-16 °C in July and August. In extreme cases, due to the coastal position of Porto, temperatures below freezing (0 °C) are rare, but not uncommon, and frosts are never severe. The lowest temperature ever recorded in the city was −4.1 °C on 11 January 1941.'
        ,
      image: 'https://www.portugal-live.net/images/rotator/321-porto-a.jpg'
    },
    {
      id: 2,
      header: 'Precipitation',
      description:
        'Porto has abundant levels of precipitation, especially high for a Mediterranean climate, reason why Arthur Newell Strahler - a geoscience professor and the developer of the Strahler Stream Order system, included Porto on the marine west coast climate category. Despite averaging above 1,000 mm of precipitation a year, July and August are relatively dry with around 15-30 mm falling each month. The wettest period is between October and February, mostly between October and December, the wettest month.',
      image: 'https://portoalities.com/wp-content/uploads/2017/12/winter-break-in-porto.jpg'
    },
    {
      id: 3,
      header: 'Humidity',
      description:
        'The average relative humidity is around 77%. 81% from November to January and 73% in the summer. Summer can be slightly muggy in the hottest days but is generally comfortable, as temperatures rarelly surpass 30 °C.',
      image: 'https://www.gourmandbreaks.com/wp-content/uploads/Porto-1030x681.jpg'
    },
    {
      id: 4,
      header: 'Sunshine, UV and daylight',
      description:
        'Despite its precipitation, the total hours of sunshine are relatively normal for a region of its latitude. Winters, especially December, are dull and summers are sunny.',
      image: 'https://www.beerandcroissants.com/wp-content/uploads/2019/01/Porto-Portugal.jpg'
    },
    {
      id: 5,
      header: 'Wind',
      description:
        'As a coastal Atlantic city, winds are most predominant in winter. In the summer, there are nortada winds, which prevail and can refresh the city in the hottest days. The city centre is sheltered and seldom gets any strong winds.',
      image: 'https://www.surfertoday.com/images/stories/portosurffilmfestival.jpg'
    }
  ]
  return (
    <CardView
      items={items}
      activeColor='rgba(48, 71, 120, 0.85)'
      imageHeight='auto'
      imageWidth='500px'
    />
  )
}

export default ClimateCard