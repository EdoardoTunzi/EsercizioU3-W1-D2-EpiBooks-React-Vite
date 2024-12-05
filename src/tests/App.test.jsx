import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";
/* describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
}) */

//TEST 1
//questo describe è la sezione dei test su Welcome
describe("verifies Welcome functionality", () => {
  // singolo test e descrizione
  it("checks if welcome is mounted correctly", () => {
    //definisco l'elemento su cui fare il test
    render(<Welcome />);
    //mi prendo nel dom virtuale l'elemento da valutare
    const heading = screen.getByText(/Welcome on our website/i);
    screen.debug(heading);
    //definisco la mia aspettativa, la condizione da aspettarsi come risultato del test
    expect(heading).toBeInTheDocument();
  });
});
//TEST 2
describe("verifies Booklist functionality", () => {
  it("checks that are generated as much cards as contained in Fantasy.json ", async () => {
    render(<App />);
    const card = await screen.queryAllByRole("img");
    screen.debug(card);
    expect(card.length).toBe(fantasy.length);
  });
});

//test 4
describe("verifies functionality of searchbar", () => {
  it("check if Searchbar filters and returns the exact number of searched books", async () => {
    render(<App />);
    const inputField = screen.getByPlaceholderText(/Search books by title/i);
    fireEvent.change(inputField, { target: { value: "dragon" } });
    const filteredElements = await screen.findAllByRole("img");

    expect(filteredElements).toHaveLength(8);
  });
});
