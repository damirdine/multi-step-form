import styled from "styled-components";
import { InputOptions } from "../../types";

const StyledSwitch = styled.section`
    display: flex;
`
type InputSwitchProps = { options: InputOptions[]; name: string };

function InputSwitch({ options, name } : InputSwitchProps) {
  return (
    <StyledSwitch>
        <label htmlFor="on">
            {options[0].label}
        </label>
        <input type="radio" id="on" value="on" name={name}/>
        <input type="radio" id="off" value="off" name={name}/>
        <label htmlFor="off">
            {options[1].label}
        </label>
    </StyledSwitch>
  )
}

export default InputSwitch