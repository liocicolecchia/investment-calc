import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={logo} alt="logo of a bag of money" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}

export default Header;
