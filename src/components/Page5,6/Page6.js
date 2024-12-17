import React, { useState } from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question56 from './Question56';
import { Alert } from 'react-native';

const Page6 = ({ next, back }) => {
  const [userAnswer1, setUserAnswer1] = useState('');
  const [userAnswer2, setUserAnswer2] = useState('');
  const [userAnswer3, setUserAnswer3] = useState([]);

  const answerInfo = {
    1: ["브로콜리", "마늘", "블루베리", "연어"],
    2: ["귀리", "시금치", "녹차", "토마토"],
    3: ["귀리", "블루베리", "사과", "토마토", "참치", "연어", "녹차", "마늘", "시금치", "브로콜리"],
  };
  const answerInfo3Correct = ["귀리", "블루베리", "토마토", "연어", "녹차", "마늘", "시금치", "브로콜리"];

  const updateUserAnswer1 = (food) => setUserAnswer1(food);
  const updateUserAnswer2 = (food) => setUserAnswer2(food);
  const updateUserAnswer3 = (food) => {
    setUserAnswer3((prevAnswer3) => {
      const updateAnswer3 = prevAnswer3.includes(food) ? prevAnswer3.filter((item) => item !== food) : [...prevAnswer3, food];
      return updateAnswer3;
    });
  };

  const checkUserAnswer = () => {
    const isCorrect =
      userAnswer1 === answerInfo[1][1] &&
      userAnswer2 === answerInfo[2][0] &&
      answerInfo3Correct.length === userAnswer3.length &&
      answerInfo3Correct.every((correct) => userAnswer3.includes(correct));

    if (isCorrect) {
      Alert.alert("😊", "정답입니다!");
      setTimeout(next, 1500);
    } else {
      Alert.alert("😢", "오답입니다. 다시 풀어보세요!");
    }
  };

  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Question56 
            bigQuestion="앞서 기억해 둔 세계 8대 건강식품과 효능에 대한 문제를 풀어보세요(1~3)."
          />

          <Question56 
            smallQuestion="1. 다음 부위에 효능이 있는 건강식품의 이름은 무엇인가요?"
            img2={require('../../../assets/Page6-효능1.jpg')}
            updateUserAnswer={updateUserAnswer1}
            answerInfo={answerInfo[1]}
            userAnswer={userAnswer1}
          />
          
          <Question56 
            smallQuestion="2. 다음 부위에 효능이 있는 건강식품의 이름은 무엇인가요?"
            img2={require('../../../assets/Page6-효능2.jpg')}
            updateUserAnswer={updateUserAnswer2}
            answerInfo={answerInfo[2]}
            userAnswer={userAnswer2}
          />

          <Question56 
            smallQuestion="3. 세계 8대 건강식품의 이름에 동그라미 하세요."
            updateUserAnswer={updateUserAnswer3}
            answerInfo={answerInfo[3]}
            userAnswer={userAnswer3}
          />
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}><ButtonText>이전</ButtonText></Button>
        <Button onPress={checkUserAnswer}><ButtonText>다음</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Page6;