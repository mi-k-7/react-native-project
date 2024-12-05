import React from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import { Text } from 'react-native';

const Page1 = ({ next, back }) => {
  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Text>(Page1에 해당하는 문제 적어주세요)</Text>
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}><ButtonText>이전</ButtonText></Button>
        <Button onPress={next}><ButtonText>다음</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Page1;