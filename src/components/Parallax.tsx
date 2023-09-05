import bg1 from '../assets/background1.jpg'
import './Parallax.css'
import { useEffect } from 'react';
import M from 'materialize-css';

const Parallax = () => {

	useEffect(() => {
		let parallax = document.querySelector('.parallax')! as HTMLDivElement;
		M.Parallax.init(parallax, {});
	}, []);


  return (
    <div id="index-banner" className="parallax-container">
      <div className="section no-pad-bot">
        <div className="container">
          <br />
          <br />
          <h1 className="header center teal-text text-lighten-2">
            Welcome to TravExp
          </h1>
          <div className="row center">
            <h5 className="header col s12 light">
              Find your travel experience that suits your unique lifestyle!
            </h5>
          </div>
          <div className="row center">
            <a
              href="/"
              id="download-button"
              className="btn-large waves-effect waves-light teal lighten-1"
            >
              Get Started
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>
      <div className="parallax">
        <img src={bg1} alt="Unsplashed background img 1" />
      </div>
    </div>
  );
};

export default Parallax;
