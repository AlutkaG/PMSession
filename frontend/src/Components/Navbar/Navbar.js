import { Link } from "react-router-dom";
import logo from "../../img/logoPMSession.png";

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
					<Link to='#'>O konferencji</Link>
					<Link to='#'>Statystyki</Link>
					<Link to='#'>Opinie</Link>
					<Link to='#'>Prelegenci</Link>
					<Link to='#'>Harmonogram</Link>
					<Link to='#'>Sponsorzy</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
