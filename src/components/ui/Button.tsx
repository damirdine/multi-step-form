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
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ primary, children, ...props }: ButtonProps) {
  if (primary) {
    return <PrimaryButton {...props}>{children}</PrimaryButton>;
  }
  return <ButtonNeutral {...props}>{children}</ButtonNeutral>;
}

export default Button;
