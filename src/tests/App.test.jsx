import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import Welcome from "../components/Welcome";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

//TEST 1
//questo describe è la sezione dei test su Welcome
describe("Welcome component functionality", () => {
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
    render(<BookList books={fantasy} />);
    const card = await screen.queryAllByRole("img");

    expect(card).toHaveLength(fantasy.length);
  });
});

//test3

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
