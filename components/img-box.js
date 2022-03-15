export default function ImageBox() {
  return (
    <div className="img-box">
      <img
        className="img-box__img"
        src="imgs/happy-users.jpg"
        alt="Image of excited people pointing to a computer screen"
      />
      <div className="img-box__caption">
        <img
          src="imgs/profile-photo-resized.jpg"
          alt="Beautiful woman profile picture"
          className="img-box__profile-img"
        />
        <div className="img-box__caption-text-box">
          <h5 className="heading-five">Simple startup</h5>
          <p className="img-box__caption-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing. Tempora qui asperiores.{' '}
            <img
              src="icons/thumbs-up.svg"
              alt="Thumbs up icon"
              className="img-box__icon"
            />
          </p>
        </div>
      </div>
    </div>
  );
}
