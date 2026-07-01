import { Link } from 'react-router'

const Register = () => {
	return (
		<>
		<form action="/api/register" method="POST" className="block mx-auto">
			<input type="text" name="username" placeholder="Username" className="block border-1 border-black p-2 m-2" />
			<input type="text" name="email" placeholder="Email" className="block border-1 border-black p-2 m-2" />
			<input type="password" name="password" placeholder="Password" className="block border-1 border-black p-2 m-2" />
			<input type="submit" value="Create account" className="block border-1 border-black p-2 cursor-pointer hover:bg-sky-400 m-2" />
		</form>
		<Link to="/" className="text-sky-400 hover:text-sky-700">Go Home</Link>
		</>
	)
}

export default Register
