import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import App from '../pages/App';
import User from '../pages/User';
import UserDetail from '../pages/UserDetail';

import Error404 from '../pages/Error404';
import {
	HOME_PATH,
    LOGIN_PATH,
    USERS_PATH,
    USER_DETAIL_PATH
} from './paths';
import PrivateRoute from './PrivateRoute';
import Header from '../components/Header'

const Routes = () => {
	return (
		<Switch>
			<Redirect exact from={HOME_PATH} to={LOGIN_PATH} />
			<Route exact path={LOGIN_PATH}>
				<Header />
				<Login />
			</Route>
			<PrivateRoute exact path={USERS_PATH}>
				<Header />
				<App>
					<User/>
				</App>
			</PrivateRoute>
			<PrivateRoute path={USER_DETAIL_PATH}>
				<Header />
				<App>
					<UserDetail/>
				</App>
			</PrivateRoute>
			<Route path="*">
				<Header />
				<Error404/>
			</Route>
		</Switch>
	);
};

export default Routes;
