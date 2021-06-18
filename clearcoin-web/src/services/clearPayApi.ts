import axios, { AxiosInstance } from 'axios';
import { Transfer } from '../types/types';

const CLEARPAY_API_URL = 'http://localhost:8080/api/';

/*type User = {
	email: string;
	password: string;
}*/

class ClearPayApi {
	api: AxiosInstance;
	constructor() {
		this.api = axios.create({
			baseURL: CLEARPAY_API_URL,
			headers: {
				'Content-type': 'application/json',
			},
		});
	}

	getHeaders = () => {
		const auth = JSON.parse(localStorage.getItem('user') || '');

		if (auth && auth.token) {
			return { Authorization: `Bearer ${auth.token}` };
		}
		return {};
	};

	getUsers = async () => {
		const response = await this.api.get('user', {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	getUser = async (id: number) => {
		const response = await this.api.get(`user/${id}`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	getUserWallets = async (userId: number) => {
		const response = await this.api.get(`user/${userId}/wallet`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	executeTransfer = async (transfer: Transfer) => {
		const response = await this.api.post(`wallet/transfer`, {
			headers: this.getHeaders(),
			...transfer
		});

		return response.data;
	};

}

export default new ClearPayApi();
