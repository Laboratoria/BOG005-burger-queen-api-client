import React, { useRef } from "react";
import logoFondoPizarra from '../../img/logoSinFondo.png'
import { useNavigate } from "react-router-dom"
import { BurgerContext } from "../../context/indexContext";

// import "./navBar.scss";

function Navbar() {
	const { 
		setStateAdmin,
	} = React.useContext(BurgerContext);
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const navigate = useNavigate()

	const logout = () => {
		sessionStorage.clear();
		navigate("/");

	}

	const changeViewProducts = () => {
	setStateAdmin(true)
	}
	const changeViewUser = () => {
		setStateAdmin(false)
		}


		let checkRole = JSON.parse(sessionStorage.getItem('user'));
		// console.log('role nav', checkRole.user.role)
	return (
		<header>
			<img src={logoFondoPizarra} alt="logo" />
			<nav ref={navRef}>
			{checkRole.user.role === 'admin' && 
			<React.Fragment>
				<button onClick={changeViewUser}>Usuarios</button>
				<button onClick={changeViewProducts}>Productos</button>
				</React.Fragment>
			}
			{checkRole.user.role === 'waiter' && 
				<React.Fragment>
				<button >Pedidos</button>
				<button >Estados</button>
				</React.Fragment>
			}
			{checkRole.user.role === 'chef' && 
				<React.Fragment>
				<button >En Espera</button>
				<button >Entregados</button>
				</React.Fragment>
			}
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

export { Navbar };