import styled from '../styled';

interface ActionButtonProps {
  backgroundColor?: string;
}

const ActionButton = styled.button<ActionButtonProps>`
  border: 2px solid ${(props) => props.theme.colors.gunmetal};
  padding: 1rem;
  margin: 1rem;
  font-size: 1.25rem;
  background-color: ${(props) => props.backgroundColor || props.theme.colors.androidGreen}aa;
  &:focus,
  &:hover,
  &:active {
    background-color: ${(props) => props.backgroundColor || props.theme.colors.androidGreen};
    cursor: pointer;
  }
`;

export default ActionButton;
