import { Link } from 'react-router-dom';
import { FaTimes} from 'react-icons/fa';
import styled from "styled-components";

const StyledMenu = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    @media screen and (min-width: 790px){
      width: 60%;
    }
    background-color: rgba(255,255,255,.95);
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const StyledLink = styled(Link)`
    color: #222;
    text-decoration: none;
    font-size: clamp(3rem, 4vw, 6vw);
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    transition: .2s all ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover {
      transition: .2s all ease-in-out;
      color: orangered;
    }
  `;
  const CloseToggle = styled(FaTimes)`
    position: fixed;
    top: 5%;
    right: 4%;
    background: #222;
    color: #fff;
    padding: .75rem;
    display: flex;
    place-items: center;
    font-size: 2rem;
    cursor: pointer;
  `;
  
function Menu({handleNavToggle}) {
  return (
    <StyledMenu>
      <StyledLink to="/" onClick={handleNavToggle}>Home</StyledLink>
      <StyledLink to="/about" onClick={handleNavToggle}>About</StyledLink>
      <StyledLink to="/products" onClick={handleNavToggle}>Products</StyledLink>
      <StyledLink to="/contact" onClick={handleNavToggle}>Contact</StyledLink>
      <CloseToggle onClick={handleNavToggle} />
    </StyledMenu>
  )
}

export default Menu;