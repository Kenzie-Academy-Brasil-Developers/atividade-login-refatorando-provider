import { Switch, Route } from 'react-router-dom'
import Dashboard from '../Pages/Dashboard'
import Home from '../Pages/Home'

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/dashboard'>   
				<Dashboard />
			</Route>
		</Switch>
	)
}

export default Routes
