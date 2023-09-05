import { ParallaxImageProps } from "../ui-interfaces/ParallaxImageType";
import "./parallax.css";

const ParallaxImage = ({ parallaxImages }: ParallaxImageProps) => {
  return (
    <>
      {parallaxImages.map((parallaxImage, index) => {
        return (
          <div className="parallax-container valign-wrapper" key={index}>
            <div className="section no-pad-bot">
              <div className="container">
                <div className="row center">
                  <h5 className="header col s12 light">
                    {parallaxImage.headLineMessage}
                  </h5>
                </div>
              </div>
            </div>
            <div className="parallax">
              <img src={parallaxImage.imageSrc} alt={parallaxImage.imageAlt} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ParallaxImage;
