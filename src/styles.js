import styled from 'styled-components/native';

// 문제 나오는 부분 스타일
export const Container = styled.View`
  flex: 1;
`;
export const QuestionContainer = styled.View`
  flex: 1;
  padding-horizontal: 20px;
  align-items: center;
  justify-content: center;
`;
export const Box = styled.View`
  flex: 1;
  width: 100%;
  padding: 20px;
  border-radius: 15px;
  shadow-radius: 10px;
  shadow-opacity: 0.2;
  shadow-color: #000000;
  elevation: 5;
  background: #ffffff;
`;

// 버튼 부분 스타일
export const ButtonContainer = styled.View`
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  border-top-width: 1px;
  border-color: #e5e7eb;
`;
export const Button = styled.TouchableOpacity`
  flex: 1;
  margin-horizontal: 10px;
  padding: 15px;
  align-items: center;
  border-radius: 10px;
  background: #2d56a6;
`;
export const ButtonText = styled.Text`
  color: #ffffff;
  fontSize: 16px;
  font-weight: 700;
`;
