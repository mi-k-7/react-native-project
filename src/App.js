import React from 'react';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from "./theme";
import Quiz from './components/Quiz';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
`;

const App = () => {

    return (
        <ThemeProvider theme={theme}>
          <Container>
            <Quiz title = {['🪴세계 8대 건강식품 기억하기', '🪴모양 그리기', '🪴커피 값 계산하기', '🪴일기']} />
        </Container>
        </ThemeProvider>
    );
  };
  
  export default App;