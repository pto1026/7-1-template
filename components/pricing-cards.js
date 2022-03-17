import ButtonPrimary from './button-primary';

export default function PricingCards() {
  return (
    <div className="pricing-cards u-margin-bottom-120">
      <div className="pricing-card">
        <h4 className="heading-four u-margin-bottom-20">Basic</h4>
        <p className="pricing-card__paragraph">
          Free 14-day trial. No credit card required. Cancel anytime
        </p>
        <p className="pricing-card__price u-padding-bottom-48 u-border-bottom">
          $29.00 <span className="pricing-card__monthly">/month</span>
        </p>
        <ul className="pricing-card__list u-margin-top-32">
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            One User
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            Unlimited Viewers
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            Basic Insights
          </li>
        </ul>
        <div className="pricing-card__button">
          <ButtonPrimary>Start Free Trial</ButtonPrimary>
        </div>
      </div>
      <div className="pricing-card pricing-card--active">
        <h4 className="heading-four u-margin-bottom-20">Intermediate</h4>
        <p className="pricing-card__paragraph">
          Free 14-day trial. No credit card required. Cancel anytime
        </p>
        <p className="pricing-card__price u-padding-bottom-48 u-border-bottom">
          $49.00 <span className="pricing-card__monthly">/month</span>
        </p>
        <ul className="pricing-card__list u-margin-top-32">
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check-light.svg"
              alt="Check icon"
            />
            3 Users
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check-light.svg"
              alt="Check icon"
            />
            Unlimited Viewers
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check-light.svg"
              alt="Check icon"
            />
            Basic Insights
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check-light.svg"
              alt="Check icon"
            />
            Integrations with Google Analytics, CRM and more
          </li>
        </ul>
        <div className="pricing-card__button pricing-card__button--active">
          <ButtonPrimary>Start Free Trial</ButtonPrimary>
        </div>
      </div>
      <div className="pricing-card">
        <h4 className="heading-four u-margin-bottom-20">Advanced</h4>
        <p className="pricing-card__paragraph">
          Free 14-day trial. No credit card required. Cancel anytime
        </p>
        <p className="pricing-card__price u-padding-bottom-48 u-border-bottom">
          $79.00 <span className="pricing-card__monthly">/month</span>
        </p>
        <ul className="pricing-card__list u-margin-top-32">
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            One User
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            Unlimited Viewers
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            Basic Insights
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            Integrations with Google Analytics, CRM and more
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/check.svg"
              alt="Check icon"
            />
            One customizable kill contract per year
          </li>
        </ul>
        <div className="pricing-card__button">
          <ButtonPrimary>Start Free Trial</ButtonPrimary>
        </div>
      </div>
      <div className="pricing-card">
        <h4 className="heading-four u-margin-bottom-20">Custom</h4>
        <p className="pricing-card__paragraph">
          Custom build a plan to fit the needs of your growing business
        </p>
        <p className="pricing-card__price u-padding-bottom-48 u-border-bottom">
          Contact Us
        </p>
        <ul className="pricing-card__list u-margin-top-32">
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/envelope-simple.svg"
              alt="Envelope icon"
            />
            support@elite.com
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/phone.svg"
              alt="Phone icon"
            />
            +1-555-555-5555
          </li>
          <li className="pricing-card__list-item">
            <img
              className="pricing-card__icon"
              src="icons/map-pin.svg"
              alt="Map pin icon"
            />
            San Fransisco, CA
          </li>
        </ul>
        <div className="pricing-card__button">
          <ButtonPrimary>Start Free Trial</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}
