export default function FeaturesBtns() {
  return (
    <div className="features-btns">
      <div className="features-btns__btn features-btns__btn--active">
        <a href="#" className="btn btn--secondary">
          <img
            src="icons/chart-line-up.svg"
            className="features-btns__icon"
            alt="Chart line up icon"
          />
          Portofolio Performance
        </a>
      </div>
      <div className="features-btns__btn">
        <a href="#" className="btn btn--plain">
          <img
            src="icons/chart-bar.svg"
            className="features-btns__icon"
            alt="Bar chart icon"
          />
          Startup & Business
        </a>
      </div>
    </div>
  );
}
