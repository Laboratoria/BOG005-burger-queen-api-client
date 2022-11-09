import { useRef } from "react";
import logoFondoPizarra from '../img/logoSinFondo.png'
import {useNavigate} from "react-router-dom"

// import "./navBar.scss";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const navigate =  useNavigate()

	const logout = ()=>{
		sessionStorage.clear();
		navigate("/");
		
	}

	return (
		<header>
			  <img src={logoFondoPizarra} alt="logo" />
			<nav ref={navRef}>
				<a href="/#">Usuarios</a>
				<a href="/#">Productos</a>
				{/* <a href="/#" className="fa-solid fa-right-from-bracket" onClick={logout}></a> */}
				<button className="fa-solid fa-right-from-bracket btnLogout" onClick={logout}></button>
				<button
					className="nav-btn nav-close-btn  fa-solid fa-xmark"
					onClick={showNavbar}>
				</button>
			</nav>
			<button className="nav-btn fa-solid fa-bars" onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export {Navbar};