import React, { useState } from 'react';
import styled from 'styled-components/native';
import Intro from './Intro,7/Intro';
import Page1 from './Page1,2/Page1';
import Page2 from './Page1,2/Page2';
import Page3 from './Page3,4/Page3';
import Page4 from './Page3,4/Page4';
import Page5 from './Page5,6/Page5';
import Page6 from './Page5,6/Page6';
import Page7 from './Intro,7/Page7';
import Outro from './Page5,6/Outro';

const Container = styled.View`
  flex: 1;
`;
const Title = styled.Text`
    font-size: 18px;
    font-weight: 700;
    margin: 10px;
    margin-left: 30px;
    color: #2d56a6;
`;

const Quiz = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = () => {
    switch (currentPage) {
      case 1:
        return (
          <Container>
            <Intro next={() => setCurrentPage(2)} />
          </Container>
        );
      case 2:
        return (
          <Container>
            <Title>{props.title[0]}</Title>
            <Page1 next={() => setCurrentPage(3)} back={() => setCurrentPage(1)} />
          </Container>
        );
      case 3:
        return (
          <Container>
            <Title>{props.title[0]}</Title>
            <Page2 next={() => setCurrentPage(4)} back={() => setCurrentPage(2)} />
          </Container>
        );
      case 4:
        return (
          <Container>
            <Title>{props.title[1]}</Title>
            <Page3 next={() => setCurrentPage(5)} back={() => setCurrentPage(3)} />
          </Container>
        );
      case 5:
        return (
          <Container>
            <Title>{props.title[2]}</Title>
            <Page4 next={() => setCurrentPage(6)} back={() => setCurrentPage(4)} />
          </Container>
        );
      case 6:
        return (
          <Container>
            <Title>{props.title[0]}</Title>
            <Page5 next={() => setCurrentPage(7)} back={() => setCurrentPage(5)} />
          </Container>
        );
      case 7:
        return (
          <Container>
            <Title>{props.title[0]}</Title>
            <Page6 next={() => setCurrentPage(8)} back={() => setCurrentPage(6)} />
          </Container>
        );
      case 8:
        return (
          <Container>
            <Title>{props.title[3]}</Title>
            <Page7 next={() => setCurrentPage(9)} back={() => setCurrentPage(7)} />
          </Container>
        );
        case 9:
        return (
          <Container>
            <Outro next={() => setCurrentPage(2)} back={() => setCurrentPage(8)} />
          </Container>
        );
      default:
        return (
          <Title>Error! 다시 접속해주세요.</Title>
        );
    }
  };

  return (
    <Container>{renderPage()}</Container>
  );
};

export default Quiz;
