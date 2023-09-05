import { useEffect } from 'react';
import logo from '../assets/logo.png';
import style from './Navbar.module.css'
import M from 'materialize-css';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {

	useEffect(() => {
		let sidenav = document.querySelector('.sidenav')! as HTMLUListElement;
		M.Sidenav.init(sidenav, {});
	}, [])

  return (
    <nav className="white" role="navigation">
			<div className="nav-wrapper container">
				<Link to="/" className="brand-logo">
					<img src={logo} alt="logo" className={`responsive-img ${style.logo}`}/>
				</Link>
				<ul className="right hide-on-med-and-down">
						<li><Link to="/about" className={style.menuText}>About</Link></li>
				</ul>
				<ul id="nav-mobile" className="sidenav">
						<li><Link to="/about" className={style.menuText}>About</Link></li>
				</ul>
				<a href="/"  data-target="nav-mobile" className={`sidenav-trigger ${style.sidenavTrigger} ${style.menuText}`}><i className="material-icons">menu</i></a>
			</div>
  </nav>
  )
}

export default Navbar