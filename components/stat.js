export default function Stat({ children, statistic}) {
    return (
        <div className="stat">
              <p className="stat__statistic">
                {statistic}
              </p>
              <p className="stat__text">{children}</p>
        </div>
    )
}