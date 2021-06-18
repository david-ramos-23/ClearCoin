import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import User from './index';
const { users } = require('../../mock/userMock');

let mockUserSelector: any;

jest.mock('react-redux', () => ({
	useSelector: () => mockUserSelector,
    useDispatch: () => {
		return jest.fn();
	},
}));

describe('User', () => {
	test('Render User Page', () => {
		const history = createMemoryHistory();
		mockUserSelector = { users };
		render(
			<Router history={ history }>
					<User/>
			</Router>);

		expect(screen.getByText('David')).toBeInTheDocument();
		expect(screen.getByText('Ramos')).toBeInTheDocument();
		expect(screen.getByText('andara14@gmail.com')).toBeInTheDocument();
		expect(screen.getByText('1')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
		const history = createMemoryHistory();
		mockUserSelector = {users};

		const { container } = render(
				<Router history={ history }>
						<User/>
				</Router>);

		expect(container).toMatchSnapshot();
	});
});
