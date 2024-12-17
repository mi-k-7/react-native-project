import React from "react";
import { View, Image, TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

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
const Input = styled.TextInput`
    width: 50px;
    height: 30px;
    margin: 5px;
    padding: 1px;
    text-align: center;
    border-radius: 10px;
    background-color: #c0cce4;
    shadow-radius: 3px;
    shadow-opacity: 0.2;
    shadow-color: #000000;
    elevation: 5;
`;
const SQuestion3Box = styled.View`
    border-width: 1px;
    padding: 12px;
    border-radius: 10px;
    border-color: gray;
    flex-direction: row;
    flex-wrap: wrap;
`;

const Question56 = (props) => {
    const { bigQuestion, smallQuestion, img1, img2, updateUserAnswer, answerInfo, userAnswer } = props;
   
    return (
        <View>
            <QuestionText1>{bigQuestion}</QuestionText1>
            <QuestionText2>{smallQuestion}</QuestionText2>

            <Container>
                {img1 && (
                    <>
                        <Image source={img1} />
                        <View style={{ marginTop: -60 }}>
                            {answerInfo.map((_, index) => (
                                <Input
                                    key={index}
                                    placeholder="건강식품"
                                    returnKeyType="done"
                                    onChangeText={(text) => updateUserAnswer("food", text, index)}
                                />
                            ))}
                        </View>
                        <View style={{ marginTop: -60 }}>
                            {answerInfo.map((_, index) => (
                                <Input
                                    key={index}
                                    placeholder="효능"
                                    returnKeyType="done"
                                    onChangeText={(text) => updateUserAnswer("effect", text, index)}
                                    style={{ width: 100 }}
                                />
                            ))}
                        </View>
                    </>
                )}

                {img2 && (
                    <>
                        <Image source={img2} />
                        <View>
                            {answerInfo.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => updateUserAnswer(item)}
                                    style={{ margin: 3 }}
                                >
                                    <Text
                                        style={[
                                            { fontSize: 16 },
                                            userAnswer === item && { backgroundColor: '#c0cce4' }
                                        ]}>
                                             {index + 1}. {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </>
                )}
                {smallQuestion === '3. 세계 8대 건강식품의 이름에 동그라미 하세요.' && (
                    <SQuestion3Box>
                        {answerInfo.map((item) => (
                            <TouchableOpacity
                                key={item}
                                onPress={() => updateUserAnswer(item)}
                                style={{ margin: 5 }}
                            >
                                <Text
                                    style = {[
                                        { fontSize: 16 },
                                        userAnswer.includes(item) && { backgroundColor: '#c0cce4', borderRadius: 20 }
                                    ]}
                                >
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </SQuestion3Box>
                )}
            </Container> 
                {props.img1 && <QuestionNotice>{props.notice}</QuestionNotice>}
        </View>
    );
}

export default Question56;