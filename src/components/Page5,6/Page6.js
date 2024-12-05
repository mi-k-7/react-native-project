import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question56 from './Question56';

const Page6 = ({ next, back }) => {
  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Question56 
            bigQuestion='앞서 기억해 둔 세계 8대 건강식품과 효능에 대한 문제를 풀어보세요(1~3).'
          />

          <Question56 
            smallQuestion='1. 다음 부위에 효능이 있는 건강식품의 이름은 무엇인가요?'
          />

          <Question56 
            smallQuestion='2. 다음 부위에 효능이 있는 건강식품의 이름은 무엇인가요?'
          />

          <Question56 
            smallQuestion='3. 세계 8대 건강식품의 이름에 동그라미 하세요.'
          />
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}><ButtonText>이전</ButtonText></Button>
        <Button onPress={next}><ButtonText>다음</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Page6;