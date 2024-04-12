import SectionWrapper from '../Wrappers/SectionWrapper.jsx'
import UListWrapper from '../Wrappers/UListWrapper.jsx'
import CoreConcepts from './CoreConcepts.jsx'

import { CORE_CONCEPTS } from '../../data/data.js'

export default function CoreConcept () {
    return <>
        <SectionWrapper id='core-concepts' title='Core Concepts'>
            <UListWrapper>{CORE_CONCEPTS.map(item => <CoreConcepts key={item.title} {...item} /> )}</UListWrapper>
        </SectionWrapper>
    </>
}