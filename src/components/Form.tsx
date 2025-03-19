import styled from "styled-components";
import FormAside from "./FormAside";

const StyledForm = styled.form`
  display: grid;
  grid: auto-flow / 1fr 2fr;
  height: 500px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  width: 850px;
  padding: 15px;
`;
function Form() {
  return (
    <StyledForm>
      <FormAside />
      Form contents
    </StyledForm>
  );
}

export default Form;
