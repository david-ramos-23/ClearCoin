import React from 'react';
import { Location, LocationState } from 'history';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { LOGIN_PATH } from './paths';

interface PrivateRouteProps extends RouteProps {
	// tslint:disable-next-line:no-any
	children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
	const { component: Component, children, ...rest } = props;
	const isAuth = localStorage.getItem('user');

	const getRoute = (location: Location<LocationState>) => {
		if (!isAuth) {
			return (
				<Redirect
					to={{
						pathname: LOGIN_PATH,
						state: { from: location }
					}}
				/>
			);
		}

		return children;
	};
	
	return (
			<Route
					{...rest}
					render={(routeProps) => getRoute(routeProps.location)}
			/>
	);
};



export default PrivateRoute;
