import reactCoreImage  from '../../../assets/images/react-core-concepts.png'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

const genRandomInt = max => Math.floor(Math.random() * (max + 1))

const Header = () => {
    const description = reactDescriptions[genRandomInt(2)]
    return <>
            <img src={reactCoreImage} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are going to build!</p>
        </>
}

export default Header
