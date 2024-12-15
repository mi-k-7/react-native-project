import React, { useState } from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question56 from './Question56';

const Page6 = ({ next, back }) => {
  const [userAnswer1, setUserAnswer1] = useState('');
  const [userAnswer2, setUserAnswer2] = useState('');
  const [userAnswer3, setUserAnswer3] = useState([]);

  const answerInfo1 = [
    { num: 1, food: "브로콜리" },
    { num: 2, food: "마늘" },
    { num: 3, food: "블루베리" },
    { num: 4, food: "연어" },
  ];
  const answerInfo2 = [
    { num: 1, food: "귀리" },
    { num: 2, food: "시금치" },
    { num: 3, food: "녹차" },
    { num: 4, food: "토마토" },
  ];
  const answerInfo3 = [
    { num: 1, food: "귀리" },
    { num: 2, food: "블루베리" },
    { num: 3, food: "사과" },
    { num: 4, food: "토마토" },
    { num: 5, food: "참치" },
    { num: 6, food: "연어" },
    { num: 7, food: "녹차" },
    { num: 8, food: "마늘" },
    { num: 9, food: "시금치" },
    { num: 10, food: "브로콜리" },
  ];

  const answerInfo3Correct = ["귀리", "블루베리", "토마토", "연어", "녹차", "마늘", "시금치", "브로콜리"];

  const updateUserAnswer1 = (food) => setUserAnswer1(food);
  const updateUserAnswer2 = (food) => setUserAnswer2(food);
  const updateUserAnswer3 = (food) => {
    setUserAnswer3((prevAnswer3) => {
      const updatedAnswer3 = prevAnswer3.includes(food)
        ? prevAnswer3.filter((item) => item !== food)  // 이미 선택된 항목이라면 제거
        : [...prevAnswer3, food];  // 아니면 추가
      return updatedAnswer3;
    });
  };

  const checkUserAnswer = () => {
    const isCorrect =
      userAnswer1 === answerInfo1[1].food &&
      userAnswer2 === answerInfo2[0].food &&
      answerInfo3Correct.every((correctFood) => userAnswer3.includes(correctFood));

    if (isCorrect) {
      alert("정답입니다!");
      setTimeout(next, 1500);
    } else {
      alert("오답입니다. 다시 풀어보세요!");
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
            answerInfo={answerInfo1}
            userAnswer={userAnswer1}
            updateUserAnswer={updateUserAnswer1}
          />
          
          <Question56 
            smallQuestion="2. 다음 부위에 효능이 있는 건강식품의 이름은 무엇인가요?"
            img2={require('../../../assets/Page6-효능2.jpg')}
            answerInfo={answerInfo2}
            userAnswer={userAnswer2}
            updateUserAnswer={updateUserAnswer2}
          />

          <Question56 
            smallQuestion="3. 세계 8대 건강식품의 이름에 동그라미 하세요."
            answerInfo={answerInfo3}
            userAnswer={userAnswer3}
            updateUserAnswer={updateUserAnswer3}
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