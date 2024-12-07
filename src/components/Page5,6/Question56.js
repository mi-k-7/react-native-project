import React from "react";
import { View, Image, TextInput } from 'react-native';
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
    margin-top: 50px;
    font-size: 16px;
    font-weight: 600;
    color: red;
    text-decoration: underline;
`;

const Container = styled.View`
    marginTop: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Question56 = (props) => {
    const Answer = Array.from({length: 8});

    return (
        <View>
            <QuestionText1>{props.bigQuestion}</QuestionText1>
            <QuestionText2>{props.smallQuestion}</QuestionText2>

            {/* 스타일 깔끔하게 수정하기 */}
            <Container>
                {props.img1 && (
                    <>
                        <Image source={props.img1} />
                        <View style={{ marginTop: -60 }}>
                            {Answer.map((_, index) => (
                                    <TextInput
                                        key={index}
                                        placeholder="건강식품: 효능"
                                        returnKeyType="done" // 엔터키 done 변경
                                        style={{ width: 120, height: 30, margin: 5, padding: 1, textAlign: 'center', borderRadius: 10, backgroundColor: 'pink'}}
                                    />
                            ))}
                        </View>
                    </>
                )}

                {props.img2 && (
                    <>
                        <Image source={props.img2} />
                        <TextInput
                            placeholder="건강식품: 효능"
                            returnKeyType="done" // 엔터키 done 변경
                            style={{ width: 120, height: 30, margin: 5, padding: 10, textAlign: 'center', borderRadius: 10, backgroundColor: 'pink'}}
                        />
                    </>
                )}
            </Container> 
                {props.img1 && <QuestionNotice>{props.notice}</QuestionNotice>}
        </View>
    );
}

export default Question56;