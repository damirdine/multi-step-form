import styled from "styled-components";
import { InputOptions } from "../../types";
import { useState } from "react";

const StyledSwitch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: aliceblue;
  gap: 12px;

  & .bold {
    font-weight: bold;
  }

  label {
    font-size: 14px;
    font-weight: 500;
  }

  input[type="checkbox"] {
    appearance: none;
    position: relative;
    width: 36px;
    height: 18px;
    background-color: var(--marine-blue);
    border-radius: 9px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &::before {
      content: "";
      position: absolute;
      top: 3px; /* center vertically: (18 - 12) / 2 */
      left: 3px; /* margin inside */
      width: 12px;
      height: 12px;
      background-color: white;
      border-radius: 50%;
      transition: transform 0.3s ease;
    }
    
    &:checked::before {
      transform: translateX(18px); /* = 36 - 12 - 6 */
    }
  }
`;

type InputSwitchProps = { options: InputOptions[]; name: string };

function InputSwitch({ options, name }: InputSwitchProps) {
  const [switchValue, setSwitch] = useState(true);
  const handleToggle = () => {
    setSwitch(!switchValue)
  } 
  return (
    <StyledSwitch>
      <label htmlFor="on" className={`${switchValue === true && "bold"}`}>
        {options[0].label}
      </label>
      <input
        type="checkbox"
        id="on"
        value="on"
        name={name}
        onClick={handleToggle}
      />
      <label htmlFor="on" className={`${switchValue !== true && "bold"}`}>
        {options[1].label}
      </label>
    </StyledSwitch>
  );
}

export default InputSwitch;
