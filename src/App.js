
// import './App.css';
import './styles.css';

import logo from "./logo.svg";
import StyledButton, { FancyButton, SubmitButton } from "./components/Button/Button"


function App() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="App-logo" />
      {/* <button>Button</button> */}
      <StyledButton type="submit">Styled button</StyledButton><br /><br />

      <StyledButton variant='outline'>Styled button</StyledButton><br /><br />

      <FancyButton as="a">Fancy Button</FancyButton><br /><br />

      <SubmitButton>Submit Button</SubmitButton>
    </div>
  );
}

export default App;
