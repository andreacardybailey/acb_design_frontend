import styled from "styled-components";
import { FaBars} from 'react-icons/fa';

const StyledToggle = styled(FaBars)`
  position: fixed;
  top: 5%;
  right: 4%;
  background: #eee;
  padding: .75rem;
  display: flex;
  place-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

function Toggle({handleNavToggle}) {
  return (
    <StyledToggle onClick={handleNavToggle} />
  )
}

export default Toggle;