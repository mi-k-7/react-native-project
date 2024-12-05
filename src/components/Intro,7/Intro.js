import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import { Text } from 'react-native';

const Intro = ({ next }) => {
  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Text>(Intro 페이지 적어주세요)</Text>
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={next}><ButtonText>로그인</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Intro;