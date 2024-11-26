import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" />
      <Welcome />
      <MyFooter />
    </>
  );
}

export default App;
