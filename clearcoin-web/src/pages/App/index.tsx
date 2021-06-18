import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: sans-serif;
`;

const App = ({children}: React.PropsWithChildren<{}>): JSX.Element => {
  return (
    <Container>
				{children}
    </Container>
  );
}

export default App;
