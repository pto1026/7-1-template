export default function StatBox() {
  return (
    <div className="stats-box">
      <p className="stats-box__stat">
        97<span className="stats-box__symbol">%</span>
        <span className="stats-box__text">Customer satisfaction</span>
      </p>
      <p className="stats-box__stat">
        100M<span className="stats-box__symbol">+</span>
        <span className="stats-box__text">Monthly active users</span>
      </p>
      <p className="stats-box__stat">
        25K<span className="stats-box__symbol">+</span>
        <span className="stats-box__text">New users per week</span>
      </p>
      <p className="stats-box__stat">
        70<span className="stats-box__symbol">%</span>
        <span className="stats-box__text">Growth annually</span>
      </p>
    </div>
  );
}
