import React from 'react'

import { useContext } from 'react';

import { AllContext } from "../../context";
import './Covid.css';
import Paragraph from '../../components/Paragraph/Paragraph'

export default function Covid() {
    const { covidData } = useContext(AllContext);

    if (covidData.recovered) {
        return (
            <div>
                <h1>A guide to healthcare in Portugal</h1>
                <div className="healthSection">

                    <div>
                        <div className="Covid">
                            <h2>Covid Current Status in Portugal</h2>
                            <h3>
                                Recovered : {covidData.recovered.value}
                            </h3>
                            <h3>
                                Active Cases : {covidData.confirmed.value - covidData.recovered.value - covidData.deaths.value}
                            </h3>
                            <p>
                                Last Updated : {covidData.lastUpdate}
                            </p>
                        </div>
                        <div className="healthSection-paragraphs">
                            <h2>Healthcare for foreigners in Portugal</h2>
                            <Paragraph
                                head='How good is Portuguese healthcare?'
                                text='The available healthcare for foreigners in Portugal has greatly improved over the past ten years or so. The Euro Health Consumer Index ranked Portuguese healthcare as the 13th best in Europe in 2018, up from 20th place in 2015. It ranks higher than the UK, Spain, Italy, and Ireland. Portuguese healthcare scored highest in terms of patient rights and information, accessibility and waiting times, as well as overall health outcomes. Portugal has an average life expectancy of 81 years.
                                The National Health Service (SNS) is the system by which the State assures the right to the health protection, in the terms established by the Portuguese Constitution. It was created in 1979 and operates under the supervision of the Ministry of Health.
The SNS is characterized as being national, universal, general and free. It is national as it should be provided nationwide, although presently it still only covers Continental Portugal. It is universal as all Portuguese citizens and foreign residents have access to it. It is general as it encompasses the whole range of healthcare, including the health surveillance and promotion, the disease prevention, the diagnosis and treatment of patients and the social and medical rehabilitation. It is free, as the system is publicly funded, with the health services being tendentiously free of charge for the users.
Although some hospitals continue to constitute themselves separate administrative hospital establishments, most of the hospital units are now administratively grouped in hospital super-establishments designated "hospital centers" (centros hospitalares). A next phase of hospital administration is being implemented, with the creation of comprehensive health mega-establishments designated "local health units" (unidades de saúde local, ULS). The ULS group not only the hospitals but also the health centers located in the same city or region, integrating the providing of both primary and secondary healthcare in a single administrative unit. Most of the public hospital establishments constitute State-owned enterprises (entidades públicas empresariais, EPE). However, some public hospitals are managed by private entities as public-private partnerships (PPP).'
                                img='https://www.globalcitizensolutions.com/wp-content/uploads/2020/01/Portugal-public-health-system.png.webp'
                            />
                            <Paragraph
                                head='Where to go if you need healthcare in Portugal'
                                text='If you need healthcare in Portugal, you can visit your nearest health center for medical assistance. If the situation is an emergency, you can go to the emergency room at the nearest hospital.

                            If you require assistance you can phone the European Emergency Number: 112.
                            
                            You can also call the SNS information hotline: 808242424, which is available 24 hours a day, 7 days a week. The service is available in English and is free of charge.
                            The public hospitals are part of the National Health Service (SNS) or of the regional health services (SRS) of the Portuguese Atlantic islands.

Although some hospitals continue to constitute themselves separate administrative hospital establishments, most of the hospital units are now administratively grouped in hospital super-establishments designated "hospital centers" (centros hospitalares). A next phase of hospital administration is being implemented, with the creation of comprehensive health mega-establishments designated "local health units" (unidades de saúde local, ULS). The ULS group not only the hospitals but also the health centers located in the same city or region, integrating the providing of both primary and secondary healthcare in a single administrative unit. Most of the public hospital establishments constitute State-owned enterprises (entidades públicas empresariais, EPE). However, some public hospitals are managed by private entities as public-private partnerships (PPP).'
                                img='https://metab.ern-net.eu/wp-content/uploads/2017/12/1_CHP_ext1_final.jpg'
                            />
                            <Paragraph
                                head='Healthcare for foreigners in Portugal: EU citizens'
                                text='Visiting EU citizens are covered by Portugal’s NHS through reciprocal agreements. When traveling to Portugal, they should bring their EHIC card with them and present it to any hospital or doctor to guarantee government-funded care.There are also many private health clinics all over Portugal, which are relatively inexpensive. You can expect to pay around €40 for an appointment with a general practitioner.
                                The health subsystems are the special schemes - parallel to the SNS - responsible for the providing of healthcare to the members of certain professions or organizations. The adhesion to them is mandatory for these groups of persons, with its financing being made either by the beneficiaries or by their employers. There are public and private subsystems, with the first type being responsible for the providing of healthcare to public servants and the second to the members of private organizations.

The most important public health subsystem is the ADSE, which covers all public servants not covered by other special schemes. ADSE has more than 1.3 million beneficiaries, including servants of the central, regional and local public administrations. The other public subsystems cover some special groups of public servants and are the ADM for the military personnel of the Armed Forces, the SAD/GNR for the military personnel of the National Republican Guard, the SAD/PSP for the police personnel of the Public Security Police and SSMJ for some special professional groups (prison guards, Judiciary Police agents, probation officers, etc.) of the Ministry of Justice. All these public subsystems are entirely financed by the State.
'
                                img='https://www.heidelberg-university-hospital.com/fileadmin/_processed_/1/f/csm_Pregnancy_and_gynecological_diseases_3c61f7af06.jpg'
                            />
                            <Paragraph
                                head='Doctors and specialists in Portugal'
                                text='Doctors in Portugal are part of primary medical services covered by the Portuguese healthcare system. Most doctors are based at public health centers and once you have registered for public healthcare in Portugal, you will be able to register and make an appointment with a doctor.

                            Most of the costs for doctors in Portugal will be covered by public health insurance. However, you will usually have to make a small contribution towards consultation costs unless you’re elderly or from a vulnerable group. To ensure costs are covered, you will need to check that your doctor is contracted to offer services though the public healthcare system in Portugal. Some doctors in Portugal only offer private services.
                            
                            To see a specialist (e.g., cardiologists, psychologists) through the state healthcare system, you will typically need to be referred by a doctor. Patients usually have to pay something towards the costs of seeing a specialist in Portugal.
                            
                            Depending on what kind of treatment you need and what kind of specialist you end up seeing, you may need to wait, however. Although the quality of care is high, there can sometimes be a long wait to see specialists in Portugal on the SNS.'
                                img='https://allaboutberlin.com/images/_fullwidth/doctors-berlin.jpg'
                            />

                        </div>
                    </div>


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
