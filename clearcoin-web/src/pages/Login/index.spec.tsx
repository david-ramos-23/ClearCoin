import React from 'react';
import { render } from '@testing-library/react';
import Login from './index';

let mockUserSelector: any,
	mockState: any;
	
const mockHistory  = jest.fn();

jest.mock('react-redux', () => ({
	useSelector: () => mockUserSelector,
    useDispatch: () => {
		return jest.fn();
	},
}));


jest.mock('react-router-dom', () => {
	return {
		...jest.requireActual('react-router-dom'),
		useLocation: () => ({
			state: mockState,
		}),
		useHistory: () => {
			return {
				replace: mockHistory,
			};
		},
	};
});

describe('Login', () => {
	test('Redirect to user if has authentication', () => {
		mockUserSelector = {
				user: { token: "dummyToken"}
		}
		mockState = null;

		render(<Login/>);

		expect(mockHistory).toHaveBeenCalledWith("/user");
	});

	test('Redirect to visited page if has user', () => {
		mockUserSelector = {
				user: { token: "dummyToken"}
		}
		mockState = { from: "/user"};

		render(<Login/>);

		expect(mockHistory).toHaveBeenCalledWith("/user");
	});
});
