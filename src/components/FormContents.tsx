import styled from "styled-components";
import Input from "./ui/Input";
import { useFormSteps } from "../context/useFormSteps";
import { ReactNode } from "react";
import Summary from "./Summary";
import ButtonSection from "./ButtonSection";
import Ending from "./Ending";

const StyledFormContents = styled.div`
  padding: 24px 64px;
`;

const H2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: var(--marine-blue);
  margin-bottom: 8px;
`;

const P = styled.p`
  margin-bottom: 25px;
  font-size: 15px;
  color: var(--cool-gray);
`;

function FormContents() {
  const context = useFormSteps();
  if (!context?.currentStep) {
    return;
  }
  const step = context?.currentStep;
  if (step.slug === "ending") {
    return <Ending />;
  }
  let content: ReactNode[] | ReactNode = <>Hello</>;
  if (step.slug.toLowerCase() === "summary") {
    content = <Summary />;
  }
  if (step?.inputs?.length > 0) {
    content = step?.inputs?.map((el) => {
      return (
        <Input
          key={el.label}
          label={el.label}
          type={el.type}
          placeholder={el.placeholder}
          options={el.options}
        />
      );
    });
  }
  return (
    <StyledFormContents>
      <H2>{step.title}</H2>
      <P>{step.description}</P>
      {content}
      <ButtonSection />
    </StyledFormContents>
  );
}

export default FormContents;
