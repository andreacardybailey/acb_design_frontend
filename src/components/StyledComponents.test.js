import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
const Button = styled.button`
  color: red;
`;
describe("Testing Styled Components Menu and Toggle", () => {
  test('Styled Components are rendering', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  })
})