import { ReactNode } from 'react'
import { AuthProvider } from './Auth'

interface AppProps {
	children: ReactNode
}

const AppProvider = ({ children }: AppProps) => {
	return <AuthProvider>{children}</AuthProvider>
}

export default AppProvider
