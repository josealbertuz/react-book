import { render, screen } from "test/testUtils";

import { Marquee } from "components/Marquee";

const POKEMON = [
  "Sprigatito",
  "Floragato",
  "Meowscarada",
  "Fuecoco",
  "Crocalor",
  "Skeledirge",
  "Quaxly",
  "Quaxwell",
  "Quaquaval",
];

const ITEMS: JSX.Element[] = POKEMON.map((pokemon) => <span>{pokemon}</span>);

describe("Marquee", () => {
  it("should display a duplicate list of elements", () => {
    render(<Marquee items={ITEMS} />);

    for (const pokemon of POKEMON) {
      expect(screen.getAllByText(pokemon)).toHaveLength(2);
    }
  });
});
