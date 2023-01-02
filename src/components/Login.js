import React from 'react'

const Login = ({handleLogin, username, setUsername, password, setPassword}) => {
	return (
		<form onSubmit={handleLogin}>
			<div>
				username
				<input 
					type="text" 
					value
				/>
			</div>
			<div>
				password
				<input 
					type="text" 
					value
				/>
			</div>
		</form>
	)
}

export default Login