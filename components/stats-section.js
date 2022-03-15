export default function StatsSection() {
  return (
    <section className="stats u-margin-top-120 u-margin-bottom-96">
      <p className="stats__stat">
        100<span className="stats__symbol">+</span>
        <span className="stats__content u-margin-top-20">
          Unique content <br />
          blocks
        </span>
      </p>
      <p className="stats__stat">
        25<span className="stats__symbol">+</span>
        <span className="stats__content u-margin-top-20">
          Carefully crafted <br />
          pages
        </span>
      </p>
      <p className="stats__stat">
        &#60;24 <span className="stats__symbol">hours</span>
        <span className="stats__content u-margin-top-20">
          Average support <br />
          time
        </span>
      </p>
      <p className="stats__stat">
        99<span className="stats__symbol">%</span>
        <span className="stats__content u-margin-top-20">
          Customer <br />
          satisfaction
        </span>
      </p>
    </section>
  );
}
