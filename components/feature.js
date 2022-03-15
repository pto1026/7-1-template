export default function Feature({src, alt, heading, description}) {
    return (
        <figure className="feature">
              <img
                src={src}
                alt={alt}
                className="feature__icon"
              />
              <div className="feature__text">
                <h4 className="heading-four">{heading}</h4>
                <p className="feature__description">
                  {description}
                </p>
              </div>
            </figure>
    )
}