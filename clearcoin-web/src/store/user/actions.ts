import { USERS_UPDATE, USER_DETAIL_UPDATE, RESET_ERROR, TRANSFER_EXECUTED, TRANSFER_ERROR } from './actionNames';
import ClearPayApi from '../../services/clearPayApi';
import { Transfer } from '../../types/types';
import { Dispatch } from 'react';
import { UserActionTypes } from './reducer';

export const getUsers = () => async (dispatch: Dispatch<UserActionTypes>) => {
	try {
		const response = await ClearPayApi.getUsers();

		dispatch({
			type: USERS_UPDATE,
			payload: response,
		});
	} catch (error) {
		console.log(error)
	}
};

export const getUser = (id: number) => async (dispatch: Dispatch<UserActionTypes>) => {
	try {
		const user = await ClearPayApi.getUser(id);
		const wallets = await ClearPayApi.getUserWallets(id);

		dispatch({
			type: USER_DETAIL_UPDATE,
			payload: { ...user, wallets: wallets },
		});
	} catch (error) {
		console.log(error)
	}
};

export const transfer = (values: Transfer) => async (dispatch: Dispatch<UserActionTypes>) => {
	try {
		await ClearPayApi.executeTransfer(values);

		dispatch({
			type: TRANSFER_EXECUTED,
			payload: {},
		});
	} catch (error: any) {
		dispatch({
			type: TRANSFER_ERROR,
			payload: {errorMsg: error},
		});
	}
};

export const resetErrorMsg = () => async (dispatch: any) => {
	dispatch({
		type: RESET_ERROR,
		payload: {},
	});
};
