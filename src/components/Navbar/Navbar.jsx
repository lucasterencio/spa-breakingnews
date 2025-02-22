import logo from "../../images/LogoBN.png"

import { Button, ImageLogo, InputSpace, Nav } from "./NavbarStyled";

export default function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Pesquise por um titulo"/>
        </InputSpace>

        <ImageLogo src={logo} alt="Logo Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
