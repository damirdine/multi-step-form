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
  margin-bottom: 5px;
`;

type InputPropsType = {
  type: string;
  label: string;
  placeholder?: string;
  options?: {
    label: string;
    price?: { monthly: number; yearly: number };
    description?: string;
    image?: string;
  }[];
};

function Input(props: InputPropsType) {
  if (props?.options) {
    if (props.type === "radio" || props.type === "checkbox" ) {
      return (
        <StyledRadioInput >
          {props.options.map((el) => (
            <div key={el.label}>
              {el.label} - {el?.price?.monthly}
              <img src={el.image} />
            </div>
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
