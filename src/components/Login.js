import React, {useState} from 'react'
import loginService from '../services/blogs'

const Login = ({user, setUser, errorMessage, setErrorMessage}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e) => {
		e.preventDefault()
		console.log(`Logging in ${username}`)
		try {
			const user = await loginService.login({
				username, password
			})
			setUser(user)
			setUsername('')
			setPassword('')
		} catch (error) {
			setErrorMessage('Wrong credentials')
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
	}


	return (
		<form onSubmit={handleLogin}>
			<h1>log in to application</h1>
			<div>
				username
				<input 
					type="text" 
					value={username}
					name='username'
					onChange={e => setUsername(e.target.value)}
				/>
			</div>
			<div>
				password
				<input 
					type="text" 
					value={password}
					name='password'
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
			<button type="submit">Login</button>
		</form>
	)
}

export default Login