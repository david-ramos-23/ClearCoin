import { Wallet } from '../../types/types';
import { RESET_ERROR, TRANSFER_ERROR, TRANSFER_EXECUTED, USERS_UPDATE, USER_DETAIL_UPDATE } from './actionNames';

export type UserState = {
	users: Array<any>;
	userDetail: { wallets: Wallet[]};
	hasDataChanged: boolean;
	errorMsg?: string;
}
const INITIAL_STATE: UserState = {
	users: [],
	userDetail: { wallets: []},
	hasDataChanged: false,
	errorMsg: undefined
};

interface UserUpdateAction {
  type: string;
	payload: [];
}

interface UserDetailUpdateAction {
  type: string;
	payload: { wallets: Wallet[]};
}

interface TransferExecutedAction {
  type: string;
	payload: any;
}
interface TransferErrorAction {
  type: string;
	payload: any;
}
interface ResetErrorAction {
  type: string;
	payload: any;
}

export type UserActionTypes = UserUpdateAction 
	| UserDetailUpdateAction
	| TransferExecutedAction 
	| TransferErrorAction 
	| ResetErrorAction;

const reducer = (state = INITIAL_STATE, { type, payload }: UserActionTypes): UserState => {
	switch (type) {
		case USERS_UPDATE: {
			return {
				...state,
				users: Object.values(payload),
				hasDataChanged: false
			};
		}
		case USER_DETAIL_UPDATE: {
			return {
				...state,
				userDetail: payload,
				hasDataChanged: false
			};
		}
		case TRANSFER_EXECUTED: {
			return {
				...state,
				hasDataChanged: true,
				errorMsg: undefined
			};
		}
		case TRANSFER_ERROR: {
			return {
				...state,
				...payload
			};
		}
		case RESET_ERROR: {
			return {
				...state,
				errorMsg: undefined
			};
		}
		default:
			return state;
	}
};

export default reducer;
