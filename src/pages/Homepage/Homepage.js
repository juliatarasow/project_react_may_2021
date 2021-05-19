import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import './Homepage.css';

export default function Homepage() {
    return (
        <div className="Homepage">
            <h1 className="Logo"><span>Porto</span>  The Undefeated City</h1>

            {/* Logo for smaller devices */}
            <h1 className="LogoSmall">Porto</h1>
            <ImageSlider />
            <div className="Introduction">
                <h3>Porto - The Undefeated City</h3>
                <blockquote>Porto on the Rio Douro, only a few kilometers from the Atlantic Ocean, has a beautiful old town, which is rightly a UNESCO World Heritage Site.</blockquote>
                <p>Porto or Oporto[a][8] (Portuguese pronunciation: [ˈpoɾtu] (About this soundlisten)) is the second-largest city in Portugal and one of the Iberian Peninsula's major urban areas. Porto city proper, which is the entire municipality of Porto, is small compared to its metropolitan area, with an estimated population of just 215,945 people in a municipality with only 41.42 km2.[1][9] Porto's metropolitan area has around 1.7 million people (2019)[10] in an area of 2,395 km2 (925 sq mi),[11] making it the second-largest urban area in Portugal.[12][13][14] It is recognized as a global city with a Gamma + rating from the Globalization and World Cities Research Network.[15]
                </p>
                <p>
                    Located along the Douro River estuary in northern Portugal, Porto is one of the oldest European centres, and its core was proclaimed a World Heritage Site by UNESCO in 1996, as "Historic Centre of Porto, Luiz I Bridge and Monastery of Serra do Pilar". The historic area is also a National Monument of Portugal.[16] The western part of its urban area extends to the coastline of the Atlantic Ocean. Its settlement dates back many centuries, when it was an outpost of the Roman Empire. Its combined Celtic-Latin name, Portus Cale,[17] has been referred to as the origin of the name Portugal, based on transliteration and oral evolution from Latin. In Portuguese, the name of the city includes a definite article: o Porto ("the port" or "the harbor"), which is where its English name "Oporto" comes from.[18]
                </p>
                <p>
                    Port wine, one of Portugal's most famous exports, is named after Porto, since the metropolitan area, and in particular the cellars of Vila Nova de Gaia, were responsible for the packaging, transport, and export of fortified wine.[19] In 2014 and 2017, Porto was elected The Best European Destination by the Best European Destinations Agency.[20] Porto is on the Portuguese Way path of the Camino de Santiago. Porto is also the home of one of the country's most successful football clubs, FC Porto. </p>
            </div>

        </div>
    )
}