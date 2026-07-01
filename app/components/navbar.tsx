import { Link } from 'react-router'

const NavBar = () => {
	return (
		<nav>
			<ul className="flex flex-row justify-center items-center space-x-2 list-none">
				<li><Link to="/" className="text-sky-400 hover:text-sky-700">Home</Link></li>
				<li><Link to="/test" className="text-sky-400 hover:text-sky-700">Test</Link></li>
				<li><Link to="/register" className="text-sky-400 hover:text-sky-700">Register</Link></li>
			</ul>
		</nav>
	)
}

export default NavBar
