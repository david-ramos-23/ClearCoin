import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { USERS_PATH } from '../../router/paths';


const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`

  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin: 40px 20px 20px;
`;

const StyledH1 = styled.h1`
  font-family: "ItalianPlateNo2Expanded-Demibold",Arial,sans-serif;
  line-height: 1.35;
  margin-bottom: 40px;
  color: #000;
  font-size: 20px;
  text-align: center;
`;

const Styledh2 = styled.h2`
  color: #000;
  font-size: 18px;
  margin-bottom: 5px;
`;


const Notification = styled.div`
  background-color: #e7eff2;
  color: #727272;
  font-family: Arial,sans-serif;
  font-size: 16px;
  line-height: 1.35;
  border-radius: 4px;
  text-align: left;
  margin-bottom: 20px;
  text-align: center;
  padding: 20px;
`;

const Button = styled.button`
  display: inline-block;
  min-width: auto;
  padding: 5px 10px;
  line-height: 1.25;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  border-radius: 4px;
  transition: all .2s ease-in;
  text-align: center;
  border: 1px solid #b2fce4;
  box-shadow: none;
  text-decoration: none;
  font-family: "ItalianPlateNo2Expanded-Demibold",Arial,sans-serif;
  background-color: #b2fce4;
  color: #000;
  padding: 10px 20px;

  &:hover {
    background-color: #828282;
    border: 1px solid #828282;
    color: #fff;
    box-shadow: none;
    text-decoration: none;
  }
`;

const Error404 = () => {
	const history = useHistory();

  const onClose = () => {
    history.push(USERS_PATH);
  }
  return (
    <Container>
      <Wrapper>
        <StyledH1>Sorry, we can't find the page you are looking for</StyledH1>
        <Notification>
          <Styledh2>404 - Page not found</Styledh2>
          <p>The page you are trying to access does not exist or has been moved, becoming unavailable</p>
        </Notification>
        <div style={{ textAlign: 'center'}}>
          <Button type="button"name="goToDashboard" onClick={onClose}>Return</Button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Error404;
