import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import UserDetail from './index';
const { user } = require('../../mock/userMock');

let mockUserSelector: any;

jest.mock('react-redux', () => ({
	useSelector: () => mockUserSelector,
    useDispatch: () => {
		return jest.fn();
	},
    useParams: () => {
		return "1";
	},
}));

describe('User', () => {
	test('Render User Page', () => {
		const history = createMemoryHistory();
		mockUserSelector = {userDetail:user, hasDataChanged: false, errorMsg: undefined};

		render(
				<Router history={ history }>
						<UserDetail/>
				</Router>);

		expect(screen.getByText('David')).toBeInTheDocument();
		expect(screen.getByText('Ramos')).toBeInTheDocument();
		expect(screen.getByText('andara14@gmail.com')).toBeInTheDocument();
		expect(screen.getByText('Balance 2326.94€')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
		const history = createMemoryHistory();
		mockUserSelector = {userDetail: user, hasDataChanged: false, errorMsg: undefined};

		const { container } = render(
			<Router history={ history }>
					<UserDetail/>
			</Router>);

		expect(container).toMatchSnapshot();
	});
});
