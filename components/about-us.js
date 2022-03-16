import Quote from "./quote";
import StatBox from "./stat-box";

export default function AboutUs() {
  return (
    <div className="about-us">
      <div className="u-text-main">
        <h2 className="heading-secondary u-margin-bottom-24">About us</h2>
      </div>
      <h3 className="heading-tertiary u-margin-bottom-24">
        A dedicated solution for every business
      </h3>
      <p className="about-us__paragraph u-margin-bottom-32">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla laborum,
        corporis nam laudantium earum praesentium beatae.
      </p>
      <StatBox />
      <Quote
        src="imgs/profile-photo-2-resized.jpg"
        alt="Happy woman profile pic"
        name="Founder & CEO, Martha"
      >
        {" "}
        &quot;Elite is for teams that care about their product image.&quot;
      </Quote>
    </div>
  );
}
