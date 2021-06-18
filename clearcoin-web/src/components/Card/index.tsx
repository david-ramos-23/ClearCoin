import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { CardType } from '../../types/types';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: sans-serif;
    width: 600px;
    height: 500px;
    border-radius: 15px;
    display: flex;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;

    @media (max-width: 425px) {
        width: 300px;
    }
`;

const Title = styled.div`
    border-radius: 15px 15px 0 0;
    height:55px;
    width: 100%;
    background-color: #B2FCE5;
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    line-height: 55px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    height: 100%;
`;

const StyledInput = styled.input`
	font-size: 16px;
	height: 38px;
	background-color: #eefbf7;
	padding: .5rem;
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


const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    font-weight: 600;
    font-size: 16px;
    border: unset;
    border-radius: .75rem;
    background-color: black;
    color: #ffffff;
	transition: all .5s ease;
	
	&:hover {
		cursor: pointer;
		background-color:  #b2fce4;
		color: #000;
	}
`;


const Card = ({wallet, onSubmit, errorMsg}: CardType) => {
    const { register, handleSubmit } = useForm();

    return (
        <Container>
            <Title>Transfer</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h2>Origin - Wallet ID</h2>
                <StyledInput
                    id="originWalletId"
                    required
                    {...register('originWalletId')}
                    type="text"
                    readOnly
                    value={wallet.id}
                />
                <p style={{ padding: '.5rem'}}>Balance <strong>{wallet.amount}€</strong></p>

                <h2>Destination</h2>
                <StyledInput
                    id="destinationWalletId"
                    required
                    {...register('destinationWalletId')}
                    type="text"
                    placeholder="Wallet ID"
                />
                <StyledInput
                    id="amount"
                    required
                    {...register('amount')}
                    type="number"
                    placeholder="Amount"
                />
                <ButtonContainer>
                    <div style={ { color: 'red' }}>{errorMsg}</div>
                    <Button id="submit" type="submit">
                        Submit
                    </Button>
                </ButtonContainer>
            </Form>
        </Container>
    );
}

export default Card;
