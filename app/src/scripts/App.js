import React, { useState } from 'react'
import { CORE_CONCEPTS } from './data'

import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton'
import { EXAMPLES } from './data'

import componentsImage  from '../images/components.png'

const App = () => {

    const [ selectedState, setSelectedState] = useState()

    const handleSelect = (selectedButton) => {
        setSelectedState(selectedButton)
    }

    let tabContent = <p>Please select a topic tab above</p>

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
        <>
            <Header />
            <main>
                <section id='core-concepts'>
                <h2>Core Concepts</h2>
                    <ul>
                        {CORE_CONCEPTS.map(item => <CoreConcept key={item.title} {...item} /> )}
                    </ul>
                </section>

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
            </main>
        </>
    )
}

export default App