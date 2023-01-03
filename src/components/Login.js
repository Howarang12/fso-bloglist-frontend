import React, {useState} from 'react'

const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = (e) => {
		e.preventDefault()
		console.log(`Logging in ${username}`)
	}
	return (
		<form onSubmit={handleLogin}>
			<h1>log in to application</h1>
			<div>
				username
				<input 
					type="text" 
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>
			</div>
			<div>
				password
				<input 
					type="text" 
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	)
}

export default Login