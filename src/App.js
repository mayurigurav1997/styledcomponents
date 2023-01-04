
// import './App.css';
import StyledButton, { FancyButton } from "./components/Button/Button"


function App() {
  return (
    <div>
      {/* <button>Button</button> */}
      <StyledButton>Styled button</StyledButton><br /><br />

      <StyledButton variant='outline'>Styled button</StyledButton><br /><br />

      <FancyButton as="a">Fancy Button</FancyButton><br /><br />
    </div>
  );
}

export default App;
