import styled from "styled-components";
import Form from "./components/Form";

const AppStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--magnolia);
`;

function App() {
  return (
    <AppStyled>
      <Form />
    </AppStyled>
  );
}

export default App;
