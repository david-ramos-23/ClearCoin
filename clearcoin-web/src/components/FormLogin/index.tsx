import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const FormContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	margin: 0;
	padding: 0;
	justify-content: center;
	margin: 40px 20px 20px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
`;

const StyledInput = styled.input`
	font-size: 16px;
	height: 38px;
	background-color: #eefbf7;
	padding: 0 .5rem;
	color: #2d3134;
	margin: 5px;
	border: 1px solid #bfc5ca;
	border-radius: 4px;
	font-weight: 200;
	line-height: 1.4;

	&:focus {
		border-color: #b2fce4;
		box-shadow: 0 1px 1px #000,inset .75,0 0 8px #eaf5f7,.6;
		outline: 0 none;
	}
`;

const Button = styled.button`

	margin: 5px;
	background: #b2fce4;
	border: .125rem solid transparent;
	border-radius: .75rem;
	box-shadow: none;
	color: #000;
	font-weight: 400;
	transition: all .5s ease;
	font-size: 1.125rem;
	padding: .75rem 1.125rem;
	
	&:hover {
		cursor: pointer;
		background-color: #828282;
		color: #fff;
	}
`;

type FormLoginType = {
	onSubmitForm: Function;
}

const FormLogin = ({ onSubmitForm }: FormLoginType) => {

	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		onSubmitForm(data);
	};

	return (
		<FormContainer>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<StyledInput required {...register('email')} placeholder="email" type="email"/>
				<StyledInput
					required
					{...register('password')}
					type="password"
					className="password"
					placeholder="password"
				/>
				<Button type="submit">
					Submit
				</Button> 
			</Form>
		</FormContainer>
	);
};

export default FormLogin;
