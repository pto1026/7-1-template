export default function Button({ href, children }) {
    return (
        <a href={href} className='btn'>{children}</a>
    )
}