import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0f172a;
  color: white;

  @media (max-width: 600px) {
    padding: 18px 20px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const User = styled.div`
  font-size: 15px;
  color: #cbd5e1;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>TaskFlow</Logo>

      <User>Saif Khan 🟢</User>
    </Nav>
  );
}

export default Navbar;