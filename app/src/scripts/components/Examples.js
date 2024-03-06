import React, { useState } from "react"

import TabButton from './TabButton'

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
        <section id='examples'>
        <h2>Examples</h2>
        <menu>
            <TabButton isSelected={selectedState == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedState == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedState == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedState == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
        </menu>
       {tabContent}
    </section>
    )
}

export default Examples