import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" />
      <MyFooter />
    </>
  );
}

export default App;
