import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/icon.png'

const Navbar = () => {
	// const [activeItem, setActiveItem] = useState('Dashboard'); // Initialize with the default active item

	// const handleItemClick = (itemName) => {
	// 	setActiveItem(itemName);
	// };

	return (
		<nav>
			<div className="navbar">
				<i className='bx bx-menu'></i>
				<div className="logo"><Link to='/'><img src={ logo } className='w-10' alt='logo' /></Link></div>
				<div className="nav-links">
					<div className="sidebar-logo">
						<span className="logo-name">CodingLab</span>
						<i className='bx bx-x' ></i>
					</div>
					<ul className="links">
						<li><Link to='/' className='active'>HOME</Link></li>
						<li>
							<Link to='/user/dashboard'>Dashboard User</Link>
						</li>
						<li>
							<Link to='/admin/dashboard'>Dashboard Admin</Link>
							{/* <i className='bx bxs-chevron-down js-arrow arrow '></i>
							<ul className="js-sub-menu sub-menu">
								<li><Link to='/'>Dynamic Clock</Link></li>
								<li><Link to='/'>Form Validation</Link></li>
								<li><Link to='/'>Card Slider</Link></li>
								<li><Link to='/'>Complete Website</Link></li>
							</ul> */}
						</li>
						<li><span>ABOUT US</span></li>
						<li><Link to='auth'>Login</Link></li>
					</ul>
				</div>
				<div className="search-box">
					<i className='bx bx-search'></i>
					<div className="input-box">
						<input type="text" placeholder="Search..." />
					</div>
				</div>
			</div >
		</nav >
	);
}

export default Navbar;
