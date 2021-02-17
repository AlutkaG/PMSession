import { HashLink as Link } from "react-router-hash-link";
import logo from "../../Assets/logoPMSession.png";

import "./Navbar.css";

const Navbar = () => {
	return (
		<div className='top-nav'>
			<div className='top-nav-navi'>
				<div>
					<Link to='#'>
						<img src={logo} alt='Logo' height='100px' />
					</Link>
				</div>
				<div className='spacer' />
				<div className='top-nav-links-right'>
					<Link to='/about-conference#about-conference'>O konferencji</Link>
					<Link to='/statistics#statistics'>Statystyki</Link>
					<Link to='/thoughts#thoughts'>Opinie</Link>
					<Link to='#'>Prelegenci</Link>
					<Link to='#'>Harmonogram</Link>
					<Link to='#'>Sponsorzy</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
