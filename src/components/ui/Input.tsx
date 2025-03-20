import styled from "styled-components";

const StyledInput = styled.div`
`;

type InputPropsType = {
  type: string;
  label: string;
  placeholder?: string;
};

function Input(props: InputPropsType) {
  return (
    <StyledInput>
      <label htmlFor="">{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </StyledInput>
  );
}

export default Input;
