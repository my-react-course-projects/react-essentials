import HeaderWrapper from './Presentation/Wrappers/HeaderWrapper.jsx'
import MainWrapper from './Presentation/Wrappers/MainWrapper.jsx'

import Header from './Presentation/Layout/Header.jsx'

import Examples from './Containers/Examples.jsx'
import CoreConcept from './Presentation/CoreConcept/CoreConcept.jsx'

const App = () => {

    return (
        <>  
            <HeaderWrapper>
               <Header />
            </HeaderWrapper>
            <MainWrapper className='main'>
                <CoreConcept />
                <Examples />
            </MainWrapper>
        </>
    )
}

export default App