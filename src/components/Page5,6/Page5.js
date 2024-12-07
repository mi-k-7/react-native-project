import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question56 from './Question56';

const Page5 = ({ next, back }) => {
  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Question56 
            bigQuestion="앞서 기억해 둔 세계 8대 건강식품과 효능을 적어보세요."
            img1={require('../../../assets/Page5-건강식품효능.jpg')}
            notice="세계 8대 건강식품과 효능을 기억해 주세요."
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

export default Page5;
