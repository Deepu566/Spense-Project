import Header from './Components/header/Header'
import Navbar from "./Components/navbar/Navbar";
import Grid from "./Components/grid/Grid"
import Details from "./Components/details/Details"

function App() {
  return (
    <div style={{ height: "300vh" }}>
      <Navbar />
      <Header />
      <Grid />
      <Details />
    </div>
  );
}

export default App;
