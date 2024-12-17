import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import styled from 'styled-components/native';

const MentBox = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title1 = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 100px;
  color: #2d56a6;
`;
const Title2 = styled.Text`
  font-size: 22px;
  font-weight: 700;
`;

const Outro = ({ next }) => {
  return (
    <Container>
      <QuestionContainer>
        <Box>
          <MentBox>
            <Title1>"세계 8대 건강식품 알기"</Title1>
            <Title2>오늘도 한 걸음 더 성장하셨습니다!</Title2>
            <Title2>훌륭해요! 🎉</Title2>
          </MentBox>
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={next}><ButtonText>처음으로</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Outro;