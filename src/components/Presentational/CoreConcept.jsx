import React from 'react'
import { CORE_CONCEPTS } from '../scripts/data'
import Section from './SectionWrapper'
import CoreConcepts from './CoreConcepts'

const CoreConcept = () => {
    return (
        <Section id='core-concepts' title='Core Concepts'>
            <ul>{CORE_CONCEPTS.map(item => <CoreConcepts key={item.title} {...item} /> )}</ul>
        </Section>
    )
}

export default CoreConcept