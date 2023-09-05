import Parallax from "../components/Parallax";
import { IconSectionProps } from "../ui-interfaces/IconSectionType";
import IconSection from "../components/IconSection";

const About = () => {
  const aboutSection: IconSectionProps = {
    iconSections: [
      {
        iconName: "hiking",
        headLineMessage: "Discover mindful hiking",
        bodyMessage:
          `Mindful hiking blends hiking with mindfulness, emphasizing full engagement with nature's sensory experiences.
					 It encourages focusing on the present moment, including the sights, sounds, and sensations of the wilderness, 
					 promoting stress reduction and greater appreciation for the outdoors.`,
      },
			{
        iconName: "forest",
        headLineMessage: "Connect with nature",
        bodyMessage:
          `Connecting with nature means establishing a profound and meaningful relationship with the natural world. 
					It involves immersing oneself in outdoor environments, appreciating their beauty, and recognizing the interdependence between humans and the Earth. 
					This connection brings peace, inspiration, and a deeper sense of responsibility for preserving and respecting the environment.`,
      },
			{
        iconName: "settings",
        headLineMessage: "Disconnect and detox",
        bodyMessage:
          `Disconnect refers to the act of intentionally unplugging or distancing oneself from digital devices, 
					social media, or the internet, usually to reduce screen time and foster real-world connections. 
					Detox, in this context, signifies a period of abstaining from these digital distractions to refresh one's mental and 
					emotional well-being, often promoting healthier digital habits.`,
      },
    ],
  };

  return (
	<>
		<Parallax />
		<div className="container">
			<div className="section">
				<IconSection iconSections={aboutSection.iconSections} />
			</div>
		</div>
	</>
	);
};

export default About;
