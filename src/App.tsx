import styled from "styled-components";
import Form from "./components/Form";
import { FormStepsContextProvider } from "./context/useFormSteps";

const AppStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--magnolia);
`;

function App() {
  return (
    <FormStepsContextProvider>
      <AppStyled>
        <Form />
      </AppStyled>
    </FormStepsContextProvider>
  );
}

export default App;
