import styled from "styled-components";
import FormAside from "./FormAside";
import FormContents from "./FormContents";

const StyledForm = styled.form`
  display: grid;
  grid: auto-flow / 1fr 2fr;
  height: 500px;
  background-color: var(--white);
  border-radius: 10px;
  width: 850px;
  padding: 18px;
  gap: 15px;
`;

function Form() {
  return (
    <StyledForm>
      <FormAside />
      <FormContents />
    </StyledForm>
  );
}

export default Form;
