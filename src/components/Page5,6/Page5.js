import React, { useState } from 'react';
import { Container, QuestionContainer, Box, ButtonContainer, Button, ButtonText } from '../../styles';
import Question56 from './Question56';

const Page5 = ({ next, back }) => {
  const Answer = Array.from({length: 8}); // from:?

  const [userAnswer, setUserAnswer] = useState(Array(Answer.length).fill('')); //초깃값 빈 문자열

  // const answerInfo = ['브로콜리: 눈 피로 감소', '블루베리: 백내장 예방', '연어: 동맥경화 예방', '귀리: 고혈압 예방', '마늘: 소화기능 향상', '녹차: 위암 예방', '시금치: 변비 예방', '토마토: 골다공증, 치매 예방'];
  const answerInfo = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ'];

  // 사용자가 입력한 답변 업데이트
  const updateUserAnswer = (text, index) => {
    const updatedAnswers = [...userAnswer];
    updatedAnswers[index] = text;
    setUserAnswer(updatedAnswers);
  };

  const checkAnswer = () => {
    const isCorrect = userAnswer.every((answer, index) => answer === answerInfo[index]);

    if (isCorrect) {
      alert("정답입니다!");
      setTimeout(() => {
        next();
      }, 1500);
    } else {
      alert("오답입니다. 다시 풀어보세요!");
    }
  }
  
    // // 정답 확인
    // const checkAnswer = (answerInfo) => {
    //   const isCorrect = userAnswer.every((answer, index) => answer === answerInfo[index]);
    //   if (isCorrect) {
    //     next(); // 정답이면 다음 화면으로 이동
    //   } else {
    //     alert('오답', '모든 답을 정확히 입력해야 합니다.');
    //   }
    // };

  return (
    <Container>
      <QuestionContainer>
        <Box>
          <Question56 
            bigQuestion="앞서 기억해 둔 세계 8대 건강식품과 효능을 적어보세요."
            img1={require('../../../assets/Page5-건강식품효능.jpg')}
            notice="세계 8대 건강식품과 효능을 기억해 주세요."
            updateUserAnswer={updateUserAnswer}
            Answer={Answer}
          />
        </Box>
      </QuestionContainer>

      <ButtonContainer>
        <Button onPress={back}><ButtonText>이전</ButtonText></Button>
        <Button onPress={checkAnswer}><ButtonText>다음</ButtonText></Button>
      </ButtonContainer>
    </Container>
  );
};

export default Page5;
