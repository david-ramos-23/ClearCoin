import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USERS_PATH } from '../../router/paths';
import { logout } from '../../store/auth/actions';
import Logo from '../Logo'
import styled from 'styled-components';

type AuthType = {
  auth: boolean;
};

const HeaderContainer = styled.header`
  display: block;
  align-items: center;
  height: 90px;
  width: 100%;
  background-color: #b2fce4;
  justify-content: space-between;
`;

const HeaderWrapper = styled.div<AuthType>`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  justify-content: ${(props:AuthType) => props.auth ? 'space-between' : undefined};
`
const StyledLink = styled(Link)<AuthType>`
  ${(props: AuthType) => !props.auth 
    ? `
        margin-left: auto;
        margin-right: auto;
      `
    : undefined
  }

  text-align: center;
`;

const Button = styled.button`
  width: 150px;
  height:40px;
  margin-right: 40px;
  font-weight: 600;
  font-size: 16px;
  border: 0;
  border-radius: .75rem;
  background-color: white;
  color: #000;
  cursor: pointer;
  transition: all .5s ease;

  &:hover {
    background-color: #828282;
    color: #fff;
  }

  @media (max-width: 425px) {
    width: 70px;
    font-size: 14px;
  }

`;


const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) =>{    
    return state.auth;
  });
  
  return (
    <HeaderContainer>
      <HeaderWrapper auth={user}>
        <StyledLink
          auth={user}
          to={USERS_PATH}
        >
          <Logo />
        </StyledLink>
        <div>
        { user && <Button onClick={()=> dispatch(logout())}>Logout</Button>}

        </div>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;