export default function SectionWrapper ({children, title, ...props }) {
    return <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
}