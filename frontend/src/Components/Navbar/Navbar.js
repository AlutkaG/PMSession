import { HashLink as Link } from "react-router-hash-link";
import logo from "../../Assets/logoPMSession.png";
import { IoIosMenu } from "react-icons/io";

import "./Navbar.css";

const Navbar = (props) => {
	const handleOpen = () => {
		props.openClickHandler();
	};

	return (
		<div className='top-nav'>
			<div className='top-nav-navi'>
				<button className='icon-menu' onClick={(e) => handleOpen()}>
					<IoIosMenu size='50px' color='#262626' />
				</button>
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
					<Link to='/sponsors#sponsors'>Sponsorzy</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
