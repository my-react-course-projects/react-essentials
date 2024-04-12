import { useState } from 'react'

import SectionWrapper from '../Presentation/Wrappers/SectionWrapper.jsx'
import TabButtonWrapper from '../Presentation/Wrappers/TabButtonWrapper.jsx'
import ExamplesWrapper from '../Presentation/Wrappers/ExamplesWrapper.jsx'

import { EXAMPLES } from '../data/data.js'

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
        <SectionWrapper id='examples' title='Examples'>
        <ExamplesWrapper
            //  ButtonsContainer='menu' // other options can be ul or div
            //  ButtonsContainer={Section}  can also be passed a Custom component
            buttons={ 
                <>
                <TabButtonWrapper isSelected={selectedState == 'components'} onClick={() => handleSelect('components')}>Components</TabButtonWrapper>
                <TabButtonWrapper isSelected={selectedState == 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButtonWrapper>
                <TabButtonWrapper isSelected={selectedState == 'props'} onClick={() => handleSelect('props')}>Props</TabButtonWrapper>
                <TabButtonWrapper isSelected={selectedState == 'state'} onClick={() => handleSelect('state')}>State</TabButtonWrapper>
            </> }
            >{tabContent}
        </ExamplesWrapper>
    </SectionWrapper>
    )
}

export default Examples