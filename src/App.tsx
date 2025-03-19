import styled from "styled-components";
import Form from "./components/Form";

const AppStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: hsl(217, 100%, 97%);
`;

function App() {
  return (
    <AppStyled>
      <Form />
    </AppStyled>
  );
}

export default App;
