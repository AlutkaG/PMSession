import "./Footer.css";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AnyReactComponent = ({ text }) => (
	<div>
		<FaMapMarkerAlt color='red' size='40px' />
	</div>
);

const Footer = () => {
	const defaultProps = {
		center: {
			lat: 51.1077469,
			lng: 17.0603165,
		},
		zoom: 15,
	};
	return (
		<div>
			<section className='footer-wave-container'>
				<div className='footer-content'>
					<div className='footer-maps'>
						<GoogleMapReact
							bootstrapURLKeys={{
								key: "AIzaSyBjzduCwk6yNCseTrJm95OLnjc12JjB590",
							}}
							defaultCenter={defaultProps.center}
							defaultZoom={defaultProps.zoom}
						>
							<AnyReactComponent lat={51.1077469} lng={17.0603165} />
						</GoogleMapReact>
					</div>
					<div>
						<div className='footer-text1'>
							Project Management Session
							<br />
							Politechnika Wrocławska
							<br />
							50-371 Wrocław
						</div>
						<div className='footer-text2'>kontakt</div>
						<div className='footer-text3'>pmsession.kontakt@gmail.com</div>
					</div>
				</div>
				<div className='footer-wave footer-wave1'></div>
				<div className='footer-wave footer-wave2'></div>
				<div className='footer-wave footer-wave3'></div>
			</section>
		</div>
	);
};

export default Footer;
