import styled from "styled-components";
import asideBackground from "../assets/images/bg-sidebar-desktop.svg";
import Steps from "./Steps";

const Aside = styled.aside`
  background: url("${asideBackground}") center/cover no-repeat;
  border-radius: 10px;
  padding: 30px;
`;

function FormAside() {
  return (
    <Aside>
      <Steps />
    </Aside>
  );
}

export default FormAside;
