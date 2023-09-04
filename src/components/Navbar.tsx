import { useEffect } from 'react';
import logo from '../assets/logo.png';
import style from './Navbar.module.css'
import M from 'materialize-css';


function Navbar() {

	useEffect(() => {
		let sidenav = document.querySelector('.sidenav')! as HTMLUListElement;
		M.Sidenav.init(sidenav, {});
	}, [])

  return (
    <nav className="white" role="navigation">
			<div className="nav-wrapper container">
				<a id="logo-container" href="/" className="brand-logo">
					<img src={logo} alt="logo" className={`responsive-img ${style.logo}`}/>
				</a>
				<ul className="right hide-on-med-and-down">
						<li><a href="/" className={style.menuText}>Navbar Link</a></li>
				</ul>
				<ul id="nav-mobile" className="sidenav">
						<li><a href="/" className={style.menuText}>Navbar Link</a></li>
				</ul>
				<a href="/"  data-target="nav-mobile" className={`sidenav-trigger ${style.menuText}`}><i className="material-icons">menu</i></a>
			</div>
  </nav>
  )
}

export default Navbar