export default function ImageBox() {
  return (
    <div className="img-box">
      <img
        className="img-box__img"
        src="imgs/happy-users.jpg"
        alt="Image of excited people pointing to a computer screen"
      />
      <div className="img-box__caption">
        <h5 className="heading-five">Simple startup</h5>
        <p className="img-box__caption-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
          reprehenderit soluta, tempora qui asperiores.
          <img
            src="icons/thumbs-up"
            alt="Thumbs up icon"
            className="img-box__icon"
          />
        </p>
      </div>
    </div>
  );
}
