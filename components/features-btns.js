export default function FeaturesBtns({ toggle, handler }) {
  if (toggle === 0) {
    return (
      <div className="features-btns">
        <div className="features-btns__btn features-btns__btn--active">
          <a className="btn btn--secondary">
            <img
              src="icons/chart-line-up.svg"
              className="features-btns__icon"
              alt="Chart line up icon"
            />
            Portofolio Performance
          </a>
        </div>
        <div className="features-btns__btn">
          <a className="btn btn--plain" onClick={handler}>
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
  } else {
    return (
      <div className="features-btns">
        <div className="features-btns__btn">
          <div className="btn btn--plain" onClick={handler}>
            <img
              src="icons/chart-line-up.svg"
              className="features-btns__icon"
              alt="Chart line up icon"
            />
            Portofolio Performance
          </div>
        </div>
        <div className="features-btns__btn features-btns__btn--active">
          <div className="btn btn--secondary">
            <img
              src="icons/chart-bar.svg"
              className="features-btns__icon"
              alt="Bar chart icon"
            />
            Startup & Business
          </div>
        </div>
      </div>
    );
  }
}
