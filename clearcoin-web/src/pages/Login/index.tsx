import React, { useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../../store/auth/actions';
import FormLogin from '../../components/FormLogin';
import { USERS_PATH } from '../../router/paths';
import { Location, LocationState } from 'history';
import { AuthState } from '../../store/auth/reducer';

const LoginContainer = styled.div`
  position: relative;
`;

const Login = () => {
  const location: Location<LocationState> = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) =>{    
    return state.auth;
  });

  const onSubmitForm = (values: AuthState) => {
    console.log('values: ', values);
    dispatch(login(values));
  };

  useEffect(() => {
    if (user) {
      history.replace(USERS_PATH);
    }
  }, [history, location.state, user]);

  return (
    <LoginContainer>
      <FormLogin onSubmitForm={onSubmitForm} />
    </LoginContainer>
  );
};

export default Login;
