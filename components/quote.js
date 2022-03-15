export default function Quote() {
  return (
    <div className="quote">
      <img
        className="quote__profile-image"
        src="imgs/profile-photo-2-resized.jpg"
        alt="Happy woman profile pic"
      />
      <div className="quote__text-box">
        <p className="quote__paragraph">
          &quot;Elite is for teams that care about their product image.&quot;
        </p>
        <p className="quote__name">Founder & CEO, Martha</p>
      </div>
    </div>
  );
}
