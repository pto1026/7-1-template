export default function ButtonPrimary({ href, children }) {
    return (
        <a href={href} className='btn btn--primary'>{children}</a>
    )
}