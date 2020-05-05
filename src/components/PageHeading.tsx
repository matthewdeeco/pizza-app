import styled from '../styled';

const PageHeading = styled.header`
  font-family: '${(props) => props.theme.fonts.heading}';
  font-size: 1.75rem;
  color: ${(props) => props.theme.colors.androidGreen};
  margin-bottom: 0.5rem;
`;

export default PageHeading;
