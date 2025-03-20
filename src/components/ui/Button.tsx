import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 12px;
  border-radius: 8px;
  background-color: var(--marine-blue);
  font-family: "Ubuntu Bold";
  color: var(--white);
`;
const ButtonNeutral = styled.button`
  padding: 12px;
  color: var(--marine-blue);
  font-family: "Ubuntu Bold";
  background-color: var(--white);
`;

type ButtonProps = {
  primary?: boolean;
  children?: React.ReactNode;
};

function Button({ primary, children }: ButtonProps) {
  if (primary) {
    return <PrimaryButton>{children}</PrimaryButton>;
  }
  return <ButtonNeutral>{children}</ButtonNeutral>;
}

export default Button;
