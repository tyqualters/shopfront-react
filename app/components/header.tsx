import NavBar from './navbar.tsx'

const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center h-auto px-5 py-2 mb-2 bg-gray-200">
			<hgroup>
				<h1 className="text-xl text-white font-bold text-shadow-lg">Shopfront</h1>
			</hgroup>
			<NavBar />
		</header>
	)
}

export default Header
