import Review from './review';

export default function Reviews() {
  return (
    <div className="reviews u-text-center">
      <Review by="Andrew Burlovski - CEO at Prestige">
        Our customer retention rates doubled. Elite makes it easy to decode
        product usage and show us what works.
      </Review>
      <Review by="Robert Handrover - Founder at Prestige">
        We&apos;re building better futures together, thanks to Elite. It helped
        us see the obvious facts hidden in our data.
      </Review>
    </div>
  );
}
