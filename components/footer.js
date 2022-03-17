export default function Footer() {
  return (
    <footer className="footer container u-padding-top-96 u-text-main-lightest">
      <div className="footer__highlight">
        <div className="footer__title">
          <img
            className="footer__image"
            src="icons/package-duotone-light.svg"
            alt="Package icon"
          />
          <h6 className="heading-six">elite.</h6>
        </div>
        <p className="footer__paragraph">
          Put your business in the spotlight with a modern, detail-oriented
          website.
        </p>
        <div className="social-icons">
          <img
            className="social-icons__icon"
            src="icons/facebook.svg"
            alt="Facebook icon"
          />
          <img
            className="social-icons__icon"
            src="icons/twitter.svg"
            alt="Twitter icon"
          />
          <img
            className="social-icons__icon"
            src="icons/instagram.svg"
            alt="Instagram icon"
          />
          <img
            className="social-icons__icon"
            src="icons/globe.svg"
            alt="Globe icon"
          />
        </div>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <h6 className="footer__heading">Home</h6>
          <ul className="footer__link-list">
            <li className="footer__link">Home 1</li>
            <li className="footer__link">Home 2</li>
            <li className="footer__link">Home 3</li>
          </ul>
        </div>
        <div className="footer__col">
          <h6 className="footer__heading">Pricing</h6>
          <ul className="footer__link-list">
            <li className="footer__link">Pricing 1</li>
            <li className="footer__link">Pricing 2</li>
            <li className="footer__link">Pricing 3</li>
            <li className="footer__link">Pricing-Ecommerce</li>
          </ul>
        </div>
        <div className="footer__col">
          <h6 className="footer__heading">Company</h6>
          <ul className="footer__link-list">
            <li className="footer__link">Careers</li>
            <li className="footer__link">Careers Post</li>
            <li className="footer__link">Integration</li>
            <li className="footer__link">Integration-Details</li>
            <li className="footer__link">Help Center</li>
            <li className="footer__link">Help Center Details</li>
            <li className="footer__link">Contact</li>
          </ul>
        </div>
        <div className="footer__col">
          <h6 className="footer__heading">Other Pages</h6>
          <ul className="footer__link-list">
            <li className="footer__link">Blog</li>
            <li className="footer__link">Blog Details</li>
            <li className="footer__link">Case Study</li>
            <li className="footer__link">Case Study Details</li>
            <li className="footer__link">Changelog</li>
            <li className="footer__link">License</li>
            <li className="footer__link">Sign Up</li>
            <li className="footer__link">Sign In</li>
          </ul>
        </div>
        <div className="footer__col">
          <h6 className="footer__heading">About</h6>
          <ul className="footer__link-list">
            <li className="footer__link">About 1</li>
            <li className="footer__link">About 2</li>
            <li className="footer__link">About 3</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
