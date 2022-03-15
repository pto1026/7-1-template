export default function StatBox() {
  return (
    <div className="stats-box u-margin-bottom-32 u-padding-bottom-32 u-border-bottom">
      <p className="stats-box__stat stats-box__stat--one u-margin-bottom-24">
        97<span className="stats-box__symbol">%</span>
        <span className="stats-box__text">Customer satisfaction</span>
      </p>
      <p className="stats-box__stat stats-box__stat--two u-margin-bottom-24">
        100M<span className="stats-box__symbol">+</span>
        <span className="stats-box__text">Monthly active users</span>
      </p>
      <p className="stats-box__stat stats-box__stat--three">
        25K<span className="stats-box__symbol">+</span>
        <span className="stats-box__text">New users per week</span>
      </p>
      <p className="stats-box__stat stats-box__stat--four">
        70<span className="stats-box__symbol">%</span>
        <span className="stats-box__text">Growth annually</span>
      </p>
    </div>
  );
}
