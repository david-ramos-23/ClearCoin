import { Dispatch } from 'react';
import { AUTH_UPDATE } from './actionNames';
import { AuthActionTypes, AuthState } from './reducer';

export const login = (values: AuthState) => async (dispatch: Dispatch<AuthActionTypes>) => {
	try {
		const user = { ...values, token: "dummyToken" };
		console.log('user: ', user);

		if (user.token) {
			localStorage.setItem('user', JSON.stringify(user));

			dispatch({
				type: AUTH_UPDATE,
				payload: { user, error: false },
			});
		}
	} catch (_error) {
		dispatch({
			type: AUTH_UPDATE,
			payload: { user: null, error: true },
		});
	}
};

export const logout = () => async (dispatch: any) => {
	localStorage.removeItem('user');
	dispatch({
		type: AUTH_UPDATE,
		payload: { user: null, error: false, loggedOut: true },
	});
	window.location.reload();
};
