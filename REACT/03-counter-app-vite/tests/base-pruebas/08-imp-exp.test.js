import {
  getHeroById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/base-pruebas/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById should return Heroes by ID", () => {
    const id = 1;
    const hero = getHeroById(id);
    //console.log(hero);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  
  test("getHeroeById should return undefined if id > heroes.length", () => {
    const id = 4;
    const hero = getHeroById(id);
    //console.log(hero);
    if(id > heroes.length && id < 1) expect(hero).toBeFalsy
  });



  test("getHeroesByOwner should return an array with DC heroes", () => {
    const owner = "DC";

    const heroGroup = getHeroesByOwner(owner);
    console.log(heroGroup);
    expect(heroGroup.length).toBe(3);
    expect(heroGroup).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
    expect(heroGroup).toEqual(
      heroes.filter((heroes) => heroes.owner === owner)
    );
  });

  test('getHeroesByOwner should return an array with Marvel heroes"', () => {
    const owner = "Marvel";
    const heroGroup = getHeroesByOwner(owner);
    console.log(heroGroup);

    expect(heroGroup).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
