import React from 'react';
import { render, screen } from '@testing-library/react';
import FormLogin from './index';

describe('FormLogin', () => {
	test('Render FormLogin', () => {
		render(<FormLogin onSubmitForm={() => console.log('submitted')}/>);

		expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
		expect(screen.getByPlaceholderText('password')).toBeInTheDocument();
		expect(screen.getByText('Submit')).toBeInTheDocument();
	});

	test('snapshot is ok', () => {
		const { container } = render(<FormLogin onSubmitForm={() => console.log('submitted')}/>);

		expect(container).toMatchSnapshot();
	});
});
