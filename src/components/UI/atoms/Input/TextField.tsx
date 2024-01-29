import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from '../../../../Provider/Colors';
import { FlexColumnCard } from '../../organisms/HOCs/FlexComponents/FlexComponents.styled';

const Container = styled.View`
  width: 100%;
  border-width: 1.5px;
  border-color: ${({ error }) => error ? Colors.Incorrect_SELL : Colors.LightBlue};
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
`;

const StyledInput = styled.TextInput`
  flex: 1;
  height: 60px;
  color: ${Colors.Black}
`;

const Label = styled.Text`
  margin-left: 10px;
  font-weight: 500;
  color: ${Colors.Black};
`;

const MaxButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const MaxButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 5px;
  margin-left: 5px; /* Space between the line and button */
`;

const Line = styled.View`
  width: 1px;
  height: 30px;
  background-color: ${Colors.Black};
  margin-left: 5px; /* Space between the line and button */
`;

const MaxButtonText = styled.Text`
  color: ${Colors.Black};
  font-weight: 800;
  font-size: 14;
`;

const ErrorText = styled.Text`
  color: ${Colors.Incorrect_SELL};
  font-size: 12px;
  margin-top: 5px;
`;

const TextField = ({ label, onPressMax, isMaxAvl, error, ...props }) => {
  return (
    <FlexColumnCard>
    <Container error={error}>
      <StyledInput {...props} />
      {label && <Label>{label}</Label>}
      {isMaxAvl && (
        <MaxButtonContainer>
          <Line />
          <MaxButton onPress={onPressMax}>
            <MaxButtonText>Max</MaxButtonText>
          </MaxButton>
        </MaxButtonContainer>
      )}
    </Container>
    {error && <ErrorText>{error}</ErrorText>}
    </FlexColumnCard>

  );
};

export default TextField;
