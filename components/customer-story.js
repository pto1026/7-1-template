import ButtonWhite from './button-white';
import ButtonTransparent from './button-transparent';

export default function CustomerStory() {
  return (
    <div className="customer-story u-text-white u-text-center">
      <h2 className="heading-secondary u-margin-bottom-24">Customer story</h2>
      <h3 className="heading-tertiary u-margin-bottom-30">Andre Blisant</h3>
      <p className="customer-story__paragraph u-margin-bottom-24">
        &quot;If my product product has a million customers, 500 thousand are
        thanks to Elite&quot;
      </p>
      <div className="customer-story__btns">
        <div className="customer-story__main-btn u-text-main">
          <ButtonWhite>View customer story</ButtonWhite>
        </div>
        <div className="customer-story__transparent-btn">
          <ButtonTransparent>
            <img
              src="icons/play-fill.svg"
              alt="Play icon"
              className="customer-story__icon"
            />{" "}
            Watch story &bull; 5:47
          </ButtonTransparent>
        </div>
      </div>
    </div>
  );
}
