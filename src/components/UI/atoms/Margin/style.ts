import styled from 'styled-components/native';

interface Props {
  mt: string;
}

export const Box = styled.View<Props>`
  margin-top: ${({mt}) => mt};
`;

export const Hbox = styled.View<Props>`
  margin-right: ${({mt}) => mt};
`;
