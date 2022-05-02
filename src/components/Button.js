import React from 'react'
import styled from 'styled-components/native'

const Button = ({ title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <TitleButton>{title}</TitleButton>
    </Container>
  )
}

const Container = styled.TouchableOpacity`
  background-color: white;
  border-radius: 24px;
  width: 40%;
`
const TitleButton = styled.Text`
  margin: 15px;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-align: center;
  font-family: 'Inter-Bold';
`

export default Button
