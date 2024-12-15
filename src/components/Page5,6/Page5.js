import React, { useState } from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question56 from './Question56';

const Page5 = ({ next, back }) => {
  const [userAnswer, setUserAnswer] = useState(Array(Array.from({ length: 8 }).length).fill({ food: "", effect: "" }));

  const answerInfo = [
      { food: "브로콜리", effect: "눈 피로 감소" },
      { food: "블루베리", effect: "백내장 예방" },
      { food: "연어", effect: "동맥경화 예방" },
      { food: "귀리", effect: "고혈압 예방" },
      { food: "마늘", effect: "소화기능 향상" },
      { food: "녹차", effect: "위암 예방" },
      { food: "시금치", effect: "변비 예방" },
      { food: "토마토", effect: "골다공증, 치매 예방" },
  ];

  const updateUserAnswer = (key, value, index) => {
    const update = [...userAnswer];
    update[index] = { ...update[index], [key]: value };
    setUserAnswer(update);
  };

  const checkUserAnswer = () => {
    const isCorrect = userAnswer.every(
      (answer, index) => answer.food === answerInfo[index].food && answer.effect === answerInfo[index].effect
    );

    if (!isCorrect) { // 수정
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
            bigQuestion="앞서 기억해 둔 세계 8대 건강식품과 효능을 적어보세요."
            img1={require('../../../assets/Page5-건강식품효능.jpg')}
            notice="세계 8대 건강식품과 효능을 기억해 주세요."
            updateUserAnswer={updateUserAnswer}
            answerInfo={answerInfo}
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

export default Page5;
