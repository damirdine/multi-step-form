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
  color: var(--cool-gray);
  font-family: "Ubuntu Bold";
  background-color: var(--white);

  &:hover {
    color: var(--marine-blue);
  }
`;

type ButtonProps = {
  primary?: boolean;
  children?: React.ReactNode;
  onClick?: () => unknown;
};

function Button({ primary, children, onClick}: ButtonProps) {
  if (primary) {
    return <PrimaryButton>{children}</PrimaryButton>;
  }
  return <ButtonNeutral onClick={onClick}>{children}</ButtonNeutral>;
}

export default Button;
