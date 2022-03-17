export default function Stat({ children, statistic}) {
    return (
        <div className="stat">
              <p className="stat__statistic u-padding-left-18 u-border-left u-margin-bottom-16">
                {statistic}
              </p>
              <p className="stat__text">{children}</p>
        </div>
    )
}