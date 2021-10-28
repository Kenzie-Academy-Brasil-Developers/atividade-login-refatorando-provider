import { createContext, useContext, useState, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

interface AuthProps {
	children: ReactNode
}

interface UserData {
	email: string
	password: string
}

interface AuthProviderData {
	authToken: string
	signIn: (userData: UserData) => void
	logOut: () => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: AuthProps) => {
	const history = useHistory()

	const [authToken, setAuthToken] = useState(
		() => localStorage.getItem('token') || ''
	)

	const signIn = (userData: UserData) => {
		axios
			.post('https://kenziehub.herokuapp.com/sessions', userData)
			.then((response) => {
				localStorage.setItem('token', response.data.token)
				setAuthToken(response.data.token)
				history.push('/dashboard')
			})
			.catch((err) => console.log(err))
	}

	const logOut = () => {
		localStorage.clear()
		setAuthToken('')
		history.push('/')
	}

	return (
		<AuthContext.Provider value={{ authToken, logOut, signIn }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
