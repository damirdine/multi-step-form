import styled from "styled-components";
import Input from "./ui/Input";

const StyledFormContents = styled.div`
  padding: 68px;
`;
const H2 = styled.h2``;
const P = styled.p``;
const Button =  styled.button`
    border: 1px solid red;
`
function FormContents() {
  const step = {
    title: "Personnal info",
    description: "Please provide your name, email address, and phone number.",
    inputs: [
      { type: "text", label: "Name", placeholder: "e.g. Stephen King" },
      {
        type: "email",
        label: "Email Adress",
        placeholder: "e.g. stephenking@lorem.com",
      },
      {
        type: "phone",
        label: "Phone Number",
        placeholder: "e.g. +1 234 567 890",
      },
    ],
  };
  return (
    <StyledFormContents>
      <H2>{step.title}</H2>
      <P>{step.description}</P>

      {step.inputs.map((el) => (
        <Input key={el.label} label={el.label} type={el.type} placeholder={el.placeholder} />
      ))}
      <div>
        <Button>Next Step</Button>
      </div>
    </StyledFormContents>
  );
}

export default FormContents;
