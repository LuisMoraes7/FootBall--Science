import { Header } from "./Components/Header/header";
import { BodyTeam } from "./Components/BodyTeams/bodyteam";
import { GlobalStyles } from './styles/GlobalStyles';

function App() {

  return (
    <div>
      <GlobalStyles></GlobalStyles>
      
      <Header></Header>
      <BodyTeam ></BodyTeam>
      
    </div>
  );
}

export default App;
