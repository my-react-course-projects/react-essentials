import React, { useState } from 'react'

import Header from './components/Header'
import Main from './components/MainWrapper'
import CoreConcept from './components/CoreConcept'
import Examples from './components/Examples'

const App = () => {

    return (
        <>
            <Header />
            <Main className='main'>
                <CoreConcept />
                <Examples />
            </Main>
        </>
    )
}

export default App