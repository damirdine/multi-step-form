import styled from "styled-components";
import { InputOptions } from "../../types";

const StyleRadioInput = styled.div`
  display: flex;
  gap: 4px;
  padding: 15px;
  margin-bottom: 5px;
  & label {
    display: grid;
    /* padding: 35px; */
    background-color: red;

    > label input:checked {
      border: 3px solid blue;
    }
  }
`;

type InputRadioProps = { options: InputOptions[]; name: string };

function InputRadio({ options, name }: InputRadioProps) {
  return (
    <StyleRadioInput>
      {options?.map((el) => (
        <label htmlFor={el.label} key={el.label}>
          <input type="radio" name={name} id={el.label} />
          <p>
            {el.label} - {el?.price?.monthly}
          </p>
          <img src={el.image} />
        </label>
      ))}
      <br />
    </StyleRadioInput>
  );
}

export default InputRadio;
