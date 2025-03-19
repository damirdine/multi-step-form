import styled from "styled-components";
import asideBackground from "../assets/images/bg-sidebar-desktop.svg?url";

const Aside = styled.aside`
  background-color: blue;
  width: 100%;
  height: 100%;
`;

function FormAside() {
  console.log(asideBackground);
  return <Aside>FormAside</Aside>;
}

export default FormAside;
