import React, { useState } from "react"

import Section from './SectionWrapper'
import TabButton from './TabButton'
import Tabs from './Tabs'

import { EXAMPLES } from '../data'

const Examples = () => {

    const [ selectedState, setSelectedState] = useState('components')

    const handleSelect = (selectedButton) => {
        setSelectedState(selectedButton)
    }

    let tabContent = ''

    if(selectedState) {
      tabContent = (
            <div id='tab-content'>

            <h3>{EXAMPLES[selectedState].title}</h3>
            <p>{EXAMPLES[selectedState].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedState].code}
                </code>
            </pre>
        </div>
       )
    }

    return (
        <Section id='examples' title='Examples'>
        <Tabs
         buttons={ 
            <>
            <TabButton isSelected={selectedState == 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedState == 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedState == 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedState == 'state'} onClick={() => handleSelect('state')}>State</TabButton>
           </> }
        >{tabContent}</Tabs>
        <menu>
           
        </menu>
    </Section>
    )
}

export default Examples