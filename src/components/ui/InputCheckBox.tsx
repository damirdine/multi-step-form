import styled from "styled-components";
import { InputOptions } from "../../types";

const StyledInputCheckBox = styled.div`
  display: grid;
  gap: 15px;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px;
    border: 1px solid var(--light-gray);
    border-radius: 6px;
    cursor: pointer;
    div {
      display: flex;
      input {
        width: 18px;
        margin-right: 18px;
      }
      p {
        font-weight: bold;
        margin-bottom: 6px;
      }
      span {
        font-size: 0.88rem;
        color: var(--cool-gray);
      }
      div {
        display: grid;
      }
    }
    span {
      font-size: 0.88rem;
      color: var(--purplish-blue);
    }
    &:hover {
      border-color: var(--purplish-blue);
    }
    &:has(input:checked) {
      background-color: var(--magnolia);
      border-color: var(--purplish-blue);
    }
  }
`;
type InputCheckBoxProps = { options: InputOptions[]; name: string };

function InputCheckBox(props: InputCheckBoxProps) {
  return (
    <StyledInputCheckBox>
      {props.options.map((el) => (
        <label htmlFor={el.label} key={el.label}>
          <div>
            <input type="checkbox" name={props.name} id={el.label} />
            <div>
              <p>{el.label}</p>
              <span>{el.description}</span>
            </div>
          </div>
          <span>${el.price?.monthly}/mo</span>
        </label>
      ))}
    </StyledInputCheckBox>
  );
}

export default InputCheckBox;
