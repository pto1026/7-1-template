import Feature from "./feature";

export default function Features() {
  return (
    <div className="features">
      <Feature
        src="icons/lightning.svg"
        alt="Lightning icon"
        heading="Real-time analytics"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, delectus, itaque alias corporis eligendi officia."
      />
      <Feature
        src="icons/grid-four.svg"
        alt="Grid icon"
        heading="Intuitive dashboard"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eligendi neque. Quasi laudantium."
      />
      <Feature
        src="icons/device-mobile.svg"
        alt="Mobile icon"
        heading="Smart suggestions"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur dolorum magnam, perferendis fugit placeat quod. Ipsa quaerat consectetur!"
      />
      <Feature
        src="icons/folder-open.svg"
        alt="Folder icon"
        heading="Multiple views"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt iste hic inventore accusantium architecto laudantium ut cupiditate eius."
      />
      <Feature
        src="icons/currency-circle-dollar.svg"
        alt="Currency icon"
        heading="AI-led diagnoses"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt labore sunt ea quisquam maxime similique."
      />
      <Feature
        src="icons/headset.svg"
        alt="Headset icon"
        heading="24/7 Support"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque culpa provident minima."
      />
    </div>
  );
}
