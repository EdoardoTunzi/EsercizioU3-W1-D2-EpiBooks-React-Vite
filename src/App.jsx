import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
{
  /*import AllTheBooks from "./components/AllTheBooks";*/
}
import BookList from "./components/BookList";
import fantasy from "./data/fantasy.json";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" />
      <Welcome />
      <BookList books={fantasy} />
      <MyFooter />
    </>
  );
}

export default App;
