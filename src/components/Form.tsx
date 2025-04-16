import styled from "styled-components";
import FormAside from "./FormAside";
import FormContents from "./FormContents";
import { useFormSteps } from "../context/useFormSteps";

const StyledForm = styled.form`
  display: grid;
  grid: auto-flow / 250px 2fr;
  height: 500px;
  background-color: var(--white);
  border-radius: 10px;
  width: 850px;
  padding: 18px;
  gap: 15px;
`;

function Form() {
  const data = useFormSteps();
  if (!data?.currentStep) {
    return <h1>Chargement...</h1>;
  }
  return (
    <StyledForm>
      <FormAside />
      <FormContents />
    </StyledForm>
  );
}

export default Form;
