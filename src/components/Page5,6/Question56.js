import React from "react";
import { View, Text, Image } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';


const QuestionText1 = styled.Text`
    font-size: 20px;
    font-weight: 700;
`;

const QuestionText2 = styled.Text`
    font-size: 17px;
    font-weight: 700;
`;

const QuestionNotice = styled.Text`
    font-size: 15px;
    text-decoration: underline;
`;

// const getImage = (img) => {
//     if(img === '건강식품효능') {
//         return require('../assets/건강식품효능.png');
//     }
//     // else if(props.img == '소화기능향상') {
//     //     return require('../assets/건강식품효능.png');
//     // }

//     return require('../assets/icon.png'); // 기본 이미지
// }

const Question56 = (props) => {

    return (
        <View>
            <QuestionText1>{props.bigQuestion}</QuestionText1>
            <QuestionText2>{props.smallQuestion}</QuestionText2>
            {/* <Image source={getImage(props.img)} /> */}
            <QuestionNotice>{props.notice}</QuestionNotice>
        </View>
    );
}

export default Question56;