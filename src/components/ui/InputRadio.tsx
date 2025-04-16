import styled from "styled-components";
import { InputOptions } from "../../types";

const StyleRadioInput = styled.section`
  display: flex;
  gap: 18px;
  margin-bottom: 18px;
  
  label {
    display: flex;
    flex-direction: column;
    padding: 16px;
    border: 1.6px solid var(--light-gray);
    border-radius: 8px;
    width: 108px;
    min-width: 108px;
    /*     height: 120px; */
    &:hover {
      border-color: var(--purplish-blue);
      cursor: pointer;
    }
    img {
      width: 46px;
      margin-bottom: 42px;
    }
    div {
      display: grid;
      gap: 3.8px;
      &:nth-child(1) {
        font-weight: bold;
        font-size: 1rem;
        color: var(--marine-blue);
      }
      &:nth-child(2) {
        color: var(--cool-gray);
        font-size: 0.96rem;
      }
      &:nth-child(3) {
        color: var(--marine-blue);
        font-size: 0.88rem;
      }
    }

    input {
      appearance: none;
    }

    &:has(input:checked) {
      background-color: var(--magnolia);
      border-color: var(--purplish-blue);
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
          <img src={el.image} />
          <div>
            <div>{el.label}</div>
            <div>${el.price?.monthly}/mo</div>
            <span>2 months free</span>
          </div>
        </label>
      ))}
      <br />
    </StyleRadioInput>
  );
}

export default InputRadio;
