import styled from "styled-components";
import { InputOptions } from "../../types";

const StyledInputCheckBox = styled.div`
  display: grid;
  gap: 15px;

  input {
    background-color: red;
  }
  div {
    display: flex;
  }
`;
type InputCheckBoxProps = { options: InputOptions[]; name: string };

function InputCheckBox(props: InputCheckBoxProps) {
  return (
    <StyledInputCheckBox>
      {props.name}
      <br />
      {props.options.map((el) => (
        <div>
          <label htmlFor={el.label}>
            <input type="checkbox" name={props.name} id={el.label} />
            {el.label}
          </label>
        </div>
      ))}
    </StyledInputCheckBox>
  );
}

export default InputCheckBox;
