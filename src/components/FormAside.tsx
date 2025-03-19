import styled from "styled-components";
import asideBackground from "../assets/images/bg-sidebar-desktop.svg";

const Aside = styled.aside`
  background: url("${asideBackground}") center/cover no-repeat;
  border-radius: 10px;
  padding: 15px;
`;

function FormAside() {
  return <Aside>FormAside</Aside>;
}

export default FormAside;
