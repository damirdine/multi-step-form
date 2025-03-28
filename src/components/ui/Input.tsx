import styled from "styled-components";

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

const StyledRadioInput = styled.div`
  padding: 15px;
  background-color: red;
`;

type InputPropsType = {
  type: string;
  label: string;
  placeholder?: string;
  options?: {
    label: string;
  }[];
};

function Input(props: InputPropsType) {
  if (props?.options) {
    if (props.type === "radio") {
      return (
        <StyledRadioInput>
          {props.options.map((el) => (
            <>{el.label}</>
          ))}
          <br />
        </StyledRadioInput>
      );
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
