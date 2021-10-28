import { useAuth } from '../../Providers/Auth'
import { Button, DashboardContainer } from '../Dashboard/styles'

const Dashboard = () => {
	const { logOut } = useAuth()

	return (
		<DashboardContainer>
			<img
				alt='nothing here cat'
				src='https://cdn.dribbble.com/users/1507491/screenshots/4945826/media/116a8ebc414c519ad1cfc0fe63f79d3e.jpg?compress=1&resize=400x300'
			/>
			<p>Não há nada aqui, pode seguir em frente</p>
			<Button onClick={logOut}>Logout</Button>
		</DashboardContainer>
	)
}

export default Dashboard
