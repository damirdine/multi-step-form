import styled from "styled-components";

const StepStyled = styled.div`
  display: flex;
`;
const NumberStyled = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: solid 2px ${`var(--pastel-blue)`};
  color: var(--white);
  width: 30px;
  height: 30px;
  margin-right: 15px;
`;

type StepProps = {
  number: number;
  name: string;
};

export default function Step({ number, name }: StepProps) {
  return (
    <StepStyled>
      <NumberStyled>{number}</NumberStyled>
      <div>
        <p>STEP {number}</p>
        <h3>{name}</h3>
      </div>
    </StepStyled>
  );
}
