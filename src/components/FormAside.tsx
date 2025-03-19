import styled from "styled-components";
import asideBackground from "../assets/images/bg-sidebar-desktop.svg";

const Aside = styled.aside`
  background: url("${asideBackground}") center/cover no-repeat;
  width: 100%;
  height: 100%;
`;

function FormAside() {
  console.log(asideBackground);
  return <Aside>FormAside</Aside>;
}

export default FormAside;
