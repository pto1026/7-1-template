export default function Steps() {
  return (
    <div className="steps">
      <div className="step">
        <div className="step__img-box">
          <div className="step__img">
            <img
              className="step__profile-img u-margin-bottom-16"
              src="img/profile-photo-resized.jpg"
              alt="Profile photo"
            />
            <p className="step__name u-margin-bottom-16">Marissa Tambelosi</p>
            <p className="step__twitter-handle u-margin-bottom-24">
              @marissa_tambelosi
            </p>
            <div className="step__boxes">
              <div className="step__box--gray"></div>
              <div className="step__box--main"></div>
            </div>
          </div>
        </div>
        <h4 className="heading-four">1. Start your free trial</h4>
        <p className="step_paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
          vitae. Corrupti, sint officiis doloremque quos eaque alias ipsum error
          pariatur aperiam.
        </p>
      </div>

      <div className="step">
        <div className="step__img-box">
          <div className="step__img">
            <img
              className="step__icon"
              src="icons/stack-duotone.svg"
              alt="Stack icon"
            />
            <img
              className="step__icon"
              src="icons/broadcast-duotone.svg"
              alt="Broadcast icon"
            />
            <img
              className="step__icon"
              src="icons/flower-lotus-duotone.svg"
              alt="Lotus icon"
            />
            <img
              className="step__icon"
              src="icons/package-duotone.svg"
              alt="Package icon"
            />
          </div>
        </div>
        <h4 className="heading-four">2. Connect your product</h4>
        <p className="step_paragraph">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          fugit voluptates adipisci officia.
        </p>
      </div>

      <div className="step">
        <div className="step__img-box">
          <div className="step__img">
            <img
              src="icons/chart-bar-duotone.svg"
              alt="Bar chart icon"
              className="step__big-icon"
            />
          </div>
        </div>
        <h4 className="heading-four">3. Get data right in hand</h4>
        <p className="step__paragraph">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          quis, reiciendis commodi dolores suscipit amet earum mollitia officia
          temporibus.
        </p>
      </div>
    </div>
  );
}
