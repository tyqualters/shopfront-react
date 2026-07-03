import { Link } from 'react-router'

const NavBar = () => {
	return (
		<nav>
			<ul className="flex flex-row justify-center items-center space-x-2 list-none">
				<li><Link to="/" className="text-black hover:text-white hover:text-shadow-md">Home</Link></li>
				<li><Link to="/test" className="text-black hover:text-white hover:text-shadow-md">Test</Link></li>
				<li><Link to="/register" className="text-black hover:text-white hover:text-shadow-md">Register</Link></li>
				<li><Link to="/login" className="text-black hover:text-white hover:text-shadow-md">Login</Link></li>
			</ul>
		</nav>
	)
}

export default NavBar
