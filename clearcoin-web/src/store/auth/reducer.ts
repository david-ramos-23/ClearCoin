
import { AUTH_UPDATE } from './actionNames';

const INITIAL_STATE: AuthState = {
	user: localStorage.getItem('user')
};

interface AuthUpdateAction {
	type: string;
	payload: any;
}

export type AuthActionTypes = AuthUpdateAction;

type AuthUser = {
	email: string;
	password: string;
}
export interface AuthState {
  user: string | null | AuthUser;
}

const reducer = (state = INITIAL_STATE, { type, payload }: AuthActionTypes): AuthState => {
	switch (type) {
		case AUTH_UPDATE: {
			return {
				...state,
				...payload
			};
		}
		default:
			return state;
	}
};

export default reducer;
