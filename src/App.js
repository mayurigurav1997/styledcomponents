
// import './App.css';
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button"


function App() {
  return (
    <div>
      {/* <button>Button</button> */}
      <StyledButton type="submit">Styled button</StyledButton><br /><br />

      <StyledButton variant='outline'>Styled button</StyledButton><br /><br />

      <FancyButton as="a">Fancy Button</FancyButton><br /><br />

      <SubmitButton>Submit Button</SubmitButton>
    </div>
  );
}

export default App;
