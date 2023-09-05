import Parallax from "../components/Parallax";
import IconSection from "../components/IconSection";
import ParallaxImage from "../components/ParallaxImage";
import { useEffect } from "react";
import M from "materialize-css";
import { aboutSection, parallaxImages } from '../ui-view-model/AboutPageModel';
import Contactus from "../components/Contactus";

const About = () => {
	useEffect(() => {
		let parallax = document.querySelectorAll('.parallax')! as NodeListOf<HTMLDivElement>;
		M.Parallax.init(parallax, {});
	}, []);
  
  return (
	<>
		<Parallax />
		<div className="container">
			<div className="section">
				<IconSection iconSections={aboutSection.iconSections} />
			</div>
		</div>
		<ParallaxImage parallaxImages={[parallaxImages.parallaxImages[0]]} />
		<Contactus />
		<ParallaxImage parallaxImages={[parallaxImages.parallaxImages[1]]} />
	</>
	);
};

export default About;
