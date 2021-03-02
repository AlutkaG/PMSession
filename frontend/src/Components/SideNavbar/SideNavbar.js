import "./SideNavbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { BsChevronCompactUp } from "react-icons/bs";

const SideNavbar = (props) => {
	const onClose = (e) => {
		props.onClose && props.onClose(e);
	};

	if (props.show) {
		return null;
	}

	return (
		<div className='side-nav'>
			<Link to='/about-conference#about-conference'>O konferencji</Link>
			<Link to='/statistics#statistics'>Statystyki</Link>
			<Link to='/thoughts#thoughts'>Opinie</Link>
			<Link to='#'>Prelegenci</Link>
			<Link to='#'>Harmonogram</Link>
			<Link to='/sponsors#sponsors'>Sponsorzy</Link>
			<button className='side-close-btn' onClick={onClose}>
				<BsChevronCompactUp size='20px' />
			</button>
		</div>
	);
};

export default SideNavbar;
