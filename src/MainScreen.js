import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrease, increase} from './redux/actions';
import Button from './components/Button';
import styled from 'styled-components/native';

const MainScreen = () => {
  const dispatch = useDispatch();
  const number = useSelector(state => state.calculate.number);

  const onPressButtonPlus = () => {
    dispatch(increase());
  };
  const onPressButtonMinus = () => {
    dispatch(decrease());
  };

  return (
    <Container>
      <Button title="-1" onPress={onPressButtonMinus} />
      <TitleContainer>
        <TitleMain>{number}</TitleMain>
      </TitleContainer>
      <Button title="+1" onPress={onPressButtonPlus} />
    </Container>
  );
};

const Container = styled.View`
  background-color: #004761;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TitleContainer = styled.View`
  margin-vertical: 70px;
`;
const TitleMain = styled.Text`
  margin-vertical: 8px;
  font-size: 64px;
  font-weight: 400;
  color: #8cd6bd;
  font-family: 'Inter-Bold';
`;

export default MainScreen;
