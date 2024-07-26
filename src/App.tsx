import { Header } from "./Components/Header/header";
import { BodyTeam } from "./Components/BodyTeams/bodyteam";
import { GlobalStyles } from './styles/GlobalStyles';
import { Footer } from "./Components/Footer/footer";

function App() {

  return (
    <div>
      <GlobalStyles></GlobalStyles>
      
      <Header></Header>
      <BodyTeam ></BodyTeam>
      <Footer></Footer>
    </div>
  );
}

export default App;
