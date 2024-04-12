import TabButton from '../Common/Button.jsx'

export default function TabButtonWrapper ({children, isSelected, ...props }) {
    return <li>
            <TabButton className={isSelected ? 'active' : undefined } {...props}>
                {children}
            </TabButton>
        </li>
}
