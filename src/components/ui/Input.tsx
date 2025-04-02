import styled from "styled-components";
import { InputPropsType } from "../../types";
import InputRadio from "./InputRadio";
import InputCheckBox from "./InputCheckBox";

const StyledInput = styled.div`
  display: grid;
  gap: 5px;
  margin-bottom: 25px;

  & label {
    color: var(--marine-blue);
    margin-bottom: 2px;
  }
  & input {
    padding: 12px;
    border: 1px solid var(--cool-gray);
    border-radius: 5px;
    font-weight: 700;

    &:focus {
      border-color: var(--purplish-blue);
    }
    &:invalid {
      border-color: var(--strawberry-red);
    }
  }
`;

function Input(props: InputPropsType) {
  if (props?.options) {
    if (props.type === "radio") {
      return <InputRadio name={props.label} options={props.options} />;
    }
    if (props.type === "switch") {
      return <InputRadio name={props.label} options={props.options} />;
    }
    if(props.type === "checkbox"){
      return <InputCheckBox name={props.label} options={props.options}/>
    }
  }
  return (
    <StyledInput>
      <label htmlFor="">{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </StyledInput>
  );
}

export default Input;
